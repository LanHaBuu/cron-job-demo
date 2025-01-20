import Box from "@/components/commonStyled/Box";
import { themes } from "@/config";
import React, { useState } from "react";
import styled from "styled-components";
import Flex from "@/components/commonStyled/Flex";
import Text from "@/components/commonStyled/Text";
import { HeaderColumns, TableColWidth } from "./config";
import Image from "next/image";
import SuiIcon from "@/components/icons/SuiIcon";
import VerifiedIcon from "@/components/icons/Verified";
import { sliceAddress } from "@/components/utils";
import ComponentCopy from "@/components/Copy";
import { IWalletActivity, IWalletInfo } from "./type";
import ActivityWallet from "./components/ActivityWallet";

export const SIZE_LOGO = 30;
export const MARGIN_LOGO = 10;

interface IAddressWallet {
  walletInfo: {
    data: IWalletInfo[];
    totalUsdValue: string;
  };
  walletActivity: IWalletActivity[];
  isLoading: boolean;
  loadMore?: any;
  hasNextPage?: boolean;
}

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  text-shadow: 0 0 5px ${themes.main}, 0 0 10px ${themes.main};
  text-transform: uppercase;
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
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 50%;
`;

const Detail = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: ${themes.main};
  color: #000000;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 5px ${themes.main}, 0 0 10px ${themes.main};
  transition: 0.3s ease;

  &:hover {
    background: #00bfa5;
    box-shadow: 0 0 10px ${themes.main}, 0 0 20px ${themes.main};
  }
`;

const AddressWallet = ({
  walletInfo,
  walletActivity,
  isLoading,
  hasNextPage,
  loadMore,
}: IAddressWallet) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <Box>
      <Flex style={{ alignItems: "center", gap: "10px" }}>
        <Title>Address Wallet Creator</Title>
        <Title>-</Title>
        <Title>
          Total Value USD: {Number(walletInfo?.totalUsdValue)?.toFixed(6) ?? 0}
        </Title>
      </Flex>
      <Header>
        {HeaderColumns?.map((item: any) => (
          <Box style={{ width: `${item?.width}px` }}>
            <Text fontWeight={800} fontSize='18px'>
              {item?.title}
            </Text>
          </Box>
        ))}
      </Header>
      { walletInfo?.data?.map((item: IWalletInfo, index) => {
        return (
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
                      boxShadow: `0 0 5px ${themes.main}, 0 0 10px ${themes.main}`,
                    }}
                  />
                ) : (
                  <SuiIcon width={SIZE_LOGO} height={SIZE_LOGO} />
                )}
                {item?.verified && (
                  <WrapperVerifiedIcon>
                    <VerifiedIcon width={16} height={16} fill={themes.main} />
                  </WrapperVerifiedIcon>
                )}
              </WrapperLogo>
            </Flex>
            <Box
              style={{
                width: `${TableColWidth.token - SIZE_LOGO - MARGIN_LOGO}px`,
              }}
            >
              <BodyText>{`${item?.coinName} (${item?.coinSymbol})`}</BodyText>
              <Flex alignItems='center' style={{ gap: "6px" }}>
                <BodyText>{sliceAddress(item?.coinType)}</BodyText>
                <ComponentCopy stringCopy={item?.coinType} />
              </Flex>
            </Box>
            <Box style={{ width: `${TableColWidth.amount}px` }}>
              <BodyText>{item?.balance}</BodyText>
            </Box>
            <Box style={{ width: `${TableColWidth.price}px` }}>
              <BodyText>${item?.coinPrice?.toFixed(6)}</BodyText>
            </Box>
          </Flex>
        );
      })}
      <Detail>
          <Title style={{margin:0}}>Transaction Details: </Title>
      
          <ActivityWallet
            walletActivity={walletActivity}
            isLoading={isLoading}
            loadMore={loadMore}
            hasNextPage={hasNextPage}
          />

      </Detail>
    </Box>
  );
};

export default AddressWallet;
