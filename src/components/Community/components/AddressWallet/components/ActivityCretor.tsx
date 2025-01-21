import Box from "@/components/commonStyled/Box";
import { themes } from "@/config";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Flex from "@/components/commonStyled/Flex";
import Text from "@/components/commonStyled/Text";
import { IWalletActivity, IWalletInfo } from "../type";
import { HeaderActivityColumns } from "../config";
import HeaderInfoWallet from "./HeaderInfoWallet";
import ActivityItems from "./ActivityWallet/ActivityItems";

interface IAddressWalletCreator {
  walletInfo: {
    coins: IWalletInfo[];
    usdValue: string;
  };
  creatorActivity: IWalletActivity[];
  searchAddress: any;
}

const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  color: #000000;
`;


export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #000000;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ActivityCretor = ({
  walletInfo,
  creatorActivity,
  searchAddress,
}: IAddressWalletCreator) => {
  const [filter, setFilter] = useState<boolean>(true);

  const tokenMain = useMemo(() => {
    return walletInfo?.coins?.find((item) => item.coinType == searchAddress);
  }, [walletInfo, searchAddress]);

  const creatorActivityFilter: IWalletActivity[] = useMemo(() => {
    if (filter) {
      return creatorActivity?.filter((item: IWalletActivity) => {
        return (
          item.coinChanges &&
          item.coinChanges.some((change) =>
            change.coinAddress.includes(searchAddress)
          )
        );
      });
    }
    return creatorActivity;
  }, [creatorActivity, filter, searchAddress]);

  return (
    <Box>
      <HeaderInfoWallet
        walletInfo={walletInfo}
        isCreator
        searchAddress={searchAddress}
        creatorActivityFilter={creatorActivityFilter}
      />
      <Box paddingY='30px'>
        <Flex alignItems='center' style={{ gap: "10px" }}>
          <Title>Transaction Details: </Title>
          <Flex style={{ gap: "10px" }}>
            <Button
              style={{
                backgroundColor: filter == true ? "#868686" : "",
              }}
              onClick={() => setFilter(true)}
            >
              {tokenMain?.symbol ?? "Token"}
            </Button>
            <Button
              style={{
                backgroundColor: filter == true ? "" : "#868686",
              }}
              onClick={() => setFilter(false)}
            >
              Full
            </Button>
          </Flex>
        </Flex>

        <Flex style={{ flexDirection: "column", gap: "20px" }}>
          <Flex style={{ marginTop: "20px" }}>
            {HeaderActivityColumns?.map((item: any) => (
              <Box key={item?.title} style={{ width: item?.width }}>
                <Text color='#000000' fontSize='20px' fontWeight={600}>
                  {item.title}
                </Text>
              </Box>
            ))}
          </Flex>
          {creatorActivityFilter &&
            creatorActivityFilter?.map((item: IWalletActivity, index: any) => (
              <ActivityItems item={item} index={index} />
            ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ActivityCretor;
