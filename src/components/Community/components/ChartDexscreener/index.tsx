import Box from "@/components/commonStyled/Box";
import React, { useRef } from "react";

interface IChartDexscreener {
  caInfo: any;
}

const ChartDexscreener = ({ caInfo }: IChartDexscreener) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <Box>
      <iframe
        ref={iframeRef}
        src={`https://dexscreener.com/sui/${caInfo?.token_address}?embed=1&trades=0&info=0`}
        title='chart'
        style={{ height: "600px", width: "100%" }}
      />
    </Box>
  );
};

export default ChartDexscreener;
