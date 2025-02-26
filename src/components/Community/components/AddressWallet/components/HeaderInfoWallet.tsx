import Box from "@/components/commonStyled/Box";
import { themes } from "@/config";
import React, { useMemo } from "react";
import styled from "styled-components";
import Flex from "@/components/commonStyled/Flex";
import Text from "@/components/commonStyled/Text";
import Image from "next/image";
import SuiIcon from "@/components/icons/SuiIcon";
import VerifiedIcon from "@/components/icons/Verified";
import {
  formatAmount,
  formatNumberWithCommas,
  sliceAddress,
} from "@/components/utils";
import ComponentCopy from "@/components/Copy";
import { IWalletActivity, IWalletInfo } from "../type";
import { HeaderColumns, TableColWidth } from "../config";
import { size } from "lodash";

export const SIZE_LOGO = 30;
export const MARGIN_LOGO = 10;
export const TYPE_CREATE_COIN = "start_new_coin";

interface IHeaderWallet {
  walletInfo: {
    coins: IWalletInfo[];
    usdValue: string;
  };
  isCreator?: boolean;
  searchAddress?: any;
  creatorActivityFilter?: IWalletActivity[];
}

const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  color: #000000;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const BodyText = styled(Text)`
  max-width: 220px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #868686;
`;

const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 50%;
`;

const WrapperVerifiedIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: "#ffffff";
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 50%;
`;

const HeaderInfoWallet = ({
  walletInfo,
  isCreator = false,
  searchAddress,
  creatorActivityFilter,
}: IHeaderWallet) => {
  const tokenMain = useMemo(() => {
    if (size(creatorActivityFilter) > 0 && searchAddress) {
      return creatorActivityFilter
        ?.find((item: IWalletActivity) => item?.type == TYPE_CREATE_COIN)
        ?.coinChanges?.find((coin: any) => coin.coinAddress == searchAddress);
    }
  }, [creatorActivityFilter, searchAddress]);

  return (
    <>
      <Flex style={{ alignItems: "center", gap: "10px" }}>
        <Title>Address Wallet {isCreator ? "Creator" : ""}</Title>
        <Title>-</Title>
        <Title>
          Total Value USD: {Number(walletInfo?.usdValue)?.toFixed(6) ?? 0}$
        </Title>
      </Flex>
      <Header>
        {HeaderColumns?.map((item: any) => (
          <Box style={{ width: `${item?.width}px` }}>
            <Text color='#000000' fontSize='20px' fontWeight={600}>
              {item?.title}
            </Text>
          </Box>
        ))}
      </Header>
      {walletInfo?.coins?.map((item: IWalletInfo, index) => {
        return (
          <Box>
            <Flex key={index} height={60} alignItems='center'>
              <Flex style={{ marginRight: MARGIN_LOGO }} alignItems='center'>
                <WrapperLogo>
                  {item?.logo ? (
                    <Image
                      src={item?.logo}
                      width={SIZE_LOGO}
                      height={SIZE_LOGO}
                      alt='logo'
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <SuiIcon width={SIZE_LOGO} height={SIZE_LOGO} />
                  )}
                  {item?.verified && (
                    <WrapperVerifiedIcon>
                      <VerifiedIcon width={16} height={16} fill='green' />
                    </WrapperVerifiedIcon>
                  )}
                </WrapperLogo>
              </Flex>
              <Box
                style={{
                  width: `${TableColWidth.token - SIZE_LOGO - MARGIN_LOGO}px`,
                }}
              >
                <BodyText>{item?.symbol}</BodyText>
                <Flex alignItems='center' style={{ gap: "6px" }}>
                  <BodyText>{sliceAddress(item?.coinType)}</BodyText>
                  <ComponentCopy stringCopy={item?.coinType} />
                </Flex>
              </Box>
              <Box style={{ width: `${TableColWidth.amount}px` }}>
                <BodyText>
                  {formatAmount(item?.balance, item?.decimals)}
                </BodyText>
              </Box>
              <Box style={{ width: `${TableColWidth.price}px` }}>
                <BodyText>
                  {item?.price
                    ? `${parseFloat(Number(item?.price).toFixed(6))}$`
                    : ""}
                </BodyText>
              </Box>
            </Flex>
            {creatorActivityFilter &&
              creatorActivityFilter?.length > 0 &&
              searchAddress &&
              isCreator &&
              item?.coinType == searchAddress && (
                <Box>
                  <Text color='#000000' fontSize='20px' fontWeight={600}>
                    Token Holdings:
                  </Text>
                  <Flex style={{ gap: "6px" }}>
                    <Text>Start:</Text>
                    <Text color='#868686'>
                      {tokenMain
                        ? formatNumberWithCommas(
                            formatAmount(tokenMain?.amount, tokenMain?.decimal)
                          )
                        : 0}{' '}
                      {tokenMain?.symbol}
                    </Text>
                  </Flex>
                  <Flex style={{ gap: "6px" }}>
                    <Text>Now:</Text>
                    <Text color='#868686'>
                      {formatNumberWithCommas(
                        formatAmount(item?.balance, item?.decimals)
                      )}{' '}
                      {item?.symbol}
                    </Text>
                  </Flex>
                </Box>
              )}
          </Box>
        );
      })}
    </>
  );
};

export default HeaderInfoWallet;
