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
  margin-bottom: 20px;
  text-shadow: 0 0 5px ${themes.main}, 0 0 10px ${themes.main};
  text-transform: uppercase;
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

const ActivityCretor = ({
  walletInfo,
  creatorActivity,
  searchAddress,
}: IAddressWalletCreator) => {
  const [filter, setFilter] = useState<boolean>(true);

  const tokenMain = useMemo(() => {
    return walletInfo?.coins?.find((item) => item.coinType == searchAddress)
  },[walletInfo,searchAddress])

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
      <HeaderInfoWallet walletInfo={walletInfo} isCreator searchAddress={searchAddress} creatorActivityFilter={creatorActivityFilter}/>
      <Detail>
        <Flex alignItems='center' style={{ gap: "10px" }}>
          <Title style={{ margin: 0 }}>Transaction Details: </Title>
          <Flex style={{ gap: "10px" }}>
            <Button onClick={() => setFilter(true)}>{tokenMain?.symbol ?? 'Token'}</Button>
            <Button onClick={() => setFilter(false)}>Full</Button>
          </Flex>
        </Flex>

        <Flex style={{ flexDirection: "column", gap: "20px" }}>
          <Flex style={{ marginTop: "20px" }}>
            {HeaderActivityColumns?.map((item: any) => (
              <Box key={item?.title} style={{ width: item?.width }}>
                <Text fontSize='16px' fontWeight={700}>
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
      </Detail>
    </Box>
  );
};

export default ActivityCretor;
