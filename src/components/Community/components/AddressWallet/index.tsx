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
import { formatAmount, sliceAddress } from "@/components/utils";
import ComponentCopy from "@/components/Copy";
import { IWalletActivity, IWalletInfo } from "./type";
import ActivityWallet from "./components/ActivityWallet";
import HeaderInfoWallet, {
  MARGIN_LOGO,
  SIZE_LOGO,
} from "./components/HeaderInfoWallet";

interface IAddressWallet {
  walletInfo: {
    coins: IWalletInfo[];
    usdValue: string;
  };
  walletActivity: IWalletActivity[];
  isLoading: boolean;
  loadMore?: any;
  hasNextPage?: boolean;
}

const Title = styled.h1`
  font-size: 20px;
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
  return (
    <Box>
      <HeaderInfoWallet walletInfo={walletInfo} />
      <Detail>
        <Title>Transaction Details: </Title>

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
