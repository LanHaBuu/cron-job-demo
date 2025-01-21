import Box from "@/components/commonStyled/Box";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { getPairDexScreenerInfo } from "./api";

interface IChartDexscreener {
  caInfo: any;
}

const ChartDexscreener = ({ caInfo }: IChartDexscreener) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const reloadIframe = () => {
    if (iframeRef.current) {
      const newUrl = new URL(iframeRef.current.src);
      const randomParam = Math.random().toString();
      newUrl.searchParams.set("randomParam", randomParam);
      iframeRef.current.src = newUrl.toString();
    }
  };

  return (
    <Box>
      <iframe
        ref={iframeRef}
        src={`https://dexscreener.com/sui/${caInfo?.token_address}?embed=1&theme=dark&trades=0&info=0`}
        title='zkswap chart'
        style={{ height: "600px", width: "100%" }}
      />
    </Box>
  );
};

export default ChartDexscreener;
