import React, { useState } from "react";
import styled from "styled-components";
import { PoolInfo } from "./type";
import Text from "@/components/commonStyled/Text";
import Image from "next/image";
import Flex from "@/components/commonStyled/Flex";
import ComponentCopy from "@/components/Copy";
import { formatNumberWithCommas, sliceAddress } from "@/components/utils";
import Box from "@/components/commonStyled/Box";

interface IDescriptionInfo {
  caInfo: PoolInfo;
}


const Description = ({ caInfo }: IDescriptionInfo) => {
  return (
    <Box>
     <Flex style={{alignItems:'center',gap:'10px'}}>
        <Image src={caInfo?.icon_url} width={50} height={50} alt='icon' />
        <Box>
          <Text fontSize='24px'>{`${caInfo?.name} (${caInfo?.symbol})`}</Text>
          <Flex style={{ gap: "10px" }}>
            <Text>Created By: {sliceAddress(caInfo?.creator)}</Text>
            <ComponentCopy stringCopy={caInfo?.creator}/>
          </Flex>
          <Flex style={{ gap: "10px" }}>
            <Text>CA: {sliceAddress(caInfo?.token_address,10)}</Text>
            <ComponentCopy stringCopy={caInfo?.token_address}/>
          </Flex>
        </Box>
     </Flex>

      <Box>
        <Text>Price: {caInfo?.price?.toFixed(6)}$</Text>
        <Text>Market Cap: {formatNumberWithCommas(caInfo?.marketcap)}$</Text>
        <Text>Volume 24h: {formatNumberWithCommas(caInfo?.volume_24h)}$</Text>
      </Box>

    </Box>
  );
};

export default Description;
