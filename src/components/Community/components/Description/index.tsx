import React, { useState } from "react";
import styled from "styled-components";
import { PoolInfo } from "./type";
import Text from "@/components/commonStyled/Text";
import Image from "next/image";
import Flex from "@/components/commonStyled/Flex";
import { formatNumberWithCommas, sliceAddress } from "@/components/utils";
import Box from "@/components/commonStyled/Box";

interface IDescriptionInfo {
  caInfo: PoolInfo;
}

const Description = ({ caInfo }: IDescriptionInfo) => {
  return (
    <Box>
      <Flex alignItems='center'>
        <Text color='#000' fontWeight={600} mr='5px' fontSize='20px'>
          {`${caInfo?.name} (${caInfo?.symbol})`}
        </Text>
      </Flex>
      <Text color='#868686'>CA: {sliceAddress(caInfo?.token_address, 10)}</Text>
      <Flex
        mt='10px'
        style={{
          gap: "10px",
        }}
      >
        <Image src={caInfo?.icon_url} width={120} height={120} alt='icon' />
        <Flex flexDirection='column' justifyContent='space-between'>
          <Text color='#868686'>Price: {caInfo?.price?.toFixed(6)}$</Text>
          <Text color='#868686'>Market Cap: {formatNumberWithCommas(caInfo?.marketcap)}$</Text>
          <Text color='#868686'>Volume 24h: {formatNumberWithCommas(caInfo?.volume_24h)}$</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Description;
