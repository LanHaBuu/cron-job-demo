import { themes } from "@/config";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Flex from "../commonStyled/Flex";
import dayjs from 'dayjs'

const ImageWrapper = styled.div`
  background-color: #03c1ff85;
  height: 100vh;
  margin-top: 85px;
`;

const Header = styled(Flex)`
  justify-content: center;
`;

const TitleWrap = styled(Flex)`
  flex-direction: column;
  align-items: center;
  max-width: 760px;
`;

const TitleTopic = styled.div`
  color: ${themes.main};
  font-weight: 900;
  font-size: 68px;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const TitleContent = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 28.6px;
  text-align: center;
  letter-spacing: -1px;
  color: #4a4a4a;
`;

const Content = styled.div``;

const Chart = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = () => {
  const chartContainerRef: any = useRef(null);

  // you could use this function to convert all your times to required time zone
  function timeToLocal(originalTime: any) {
    const d = new Date(originalTime * 1000);
    return (
      Date.UTC(
        d.getFullYear(),
        d.getMonth(),
        d.getDate(),
        d.getHours(),
        d.getMinutes(),
        d.getSeconds(),
        d.getMilliseconds()
      ) / 1000
    );
  }

  useEffect(() => {
    const initChart = async () => {
      const { createChart } = await import("lightweight-charts");
      const chart = createChart(chartContainerRef.current, {
        layout: { textColor: "black", background: { color: "white" } },
     
      });
      const series = chart.addCandlestickSeries();
      const data:any = [
        {
            "low": 0.0004090909090909091,
            "high": 0.0012036694719527727,
            "open": 0.0004090909090909091,
            "close": 0.0012036694719527727,
            "time": 1737007200000
        },
        {
            "low": 0.0009262581073268575,
            "high": 0.0012036694719527727,
            "open": 0.0012036694719527727,
            "close": 0.000996956819598401,
            "time": 1737008100000
        },
        {
            "low": 0.0006489100333463355,
            "high": 0.001022439620747797,
            "open": 0.000996956819598401,
            "close": 0.0007977149869476954,
            "time": 1737009000000
        },
        {
            "low": 0.0007636726716348211,
            "high": 0.001088264331123543,
            "open": 0.0007977149869476954,
            "close": 0.0010032735198089796,
            "time": 1737009900000
        },
        {
            "low": 0.0010001905237963593,
            "high": 0.0010327860998834914,
            "open": 0.0010032735198089796,
            "close": 0.0010327860998834914,
            "time": 1737010800000
        },
        {
            "low": 0.0010327860998834914,
            "high": 0.0012135053427257568,
            "open": 0.0010327860998834914,
            "close": 0.0012135053427257568,
            "time": 1737011700000
        },
        {
            "low": 0.0010968896285525767,
            "high": 0.0013874007711485044,
            "open": 0.0012135053427257568,
            "close": 0.0010968896285525767,
            "time": 1737012600000
        },
        {
            "low": 0.0010968896285525767,
            "high": 0.001189662053438282,
            "open": 0.0010968896285525767,
            "close": 0.001189662053438282,
            "time": 1737013500000
        },
        {
            "low": 0.001189662053438282,
            "high": 0.0012318053234434973,
            "open": 0.001189662053438282,
            "close": 0.0012318053234434973,
            "time": 1737014400000
        },
        {
            "low": 0.0011516046515680106,
            "high": 0.0012492627006542186,
            "open": 0.0012318053234434973,
            "close": 0.0011516046515680106,
            "time": 1737015300000
        },
        {
            "low": 0.0007030868933257676,
            "high": 0.0011516046515680106,
            "open": 0.0011516046515680106,
            "close": 0.0007030868933257676,
            "time": 1737016200000
        },
        {
            "low": 0.0004853840645787236,
            "high": 0.0007030868933257676,
            "open": 0.0007030868933257676,
            "close": 0.0004853840645787236,
            "time": 1737017100000
        },
        {
            "low": 0.0004760581459675997,
            "high": 0.0004853840645787236,
            "open": 0.0004853840645787236,
            "close": 0.0004760581459675997,
            "time": 1737018000000
        },
        {
            "low": 0.00047521920020279887,
            "high": 0.0004760581459675997,
            "open": 0.0004760581459675997,
            "close": 0.00047521920020279887,
            "time": 1737023400000
        },
        {
            "low": 0.0004666563653712391,
            "high": 0.00047521920020279887,
            "open": 0.00047521920020279887,
            "close": 0.0004666563653712391,
            "time": 1737026100000
        },
        {
            "low": 0.00042204485883652886,
            "high": 0.0004666563653712391,
            "open": 0.0004666563653712391,
            "close": 0.00042204485883652886,
            "time": 1737028800000
        },
        {
            "low": 0.00042204485883652886,
            "high": 0.00042205400026896914,
            "open": 0.00042204485883652886,
            "close": 0.00042205400026896914,
            "time": 1737033300000
        },
        {
            "low": 0.0004219142660653768,
            "high": 0.00042205400026896914,
            "open": 0.00042205400026896914,
            "close": 0.0004219142660653768,
            "time": 1737035100000
        },
        {
            "low": 0.00042191174928067935,
            "high": 0.0004219142660653768,
            "open": 0.0004219142660653768,
            "close": 0.00042191174928067935,
            "time": 1737039600000
        },
        {
            "low": 0.0004167619901280765,
            "high": 0.00042191174928067935,
            "open": 0.00042191174928067935,
            "close": 0.0004167619901280765,
            "time": 1737045000000
        },
        {
            "low": 0.0004166401014149692,
            "high": 0.0004167619901280765,
            "open": 0.0004167619901280765,
            "close": 0.0004166401014149692,
            "time": 1737049500000
        },
        {
            "low": 0.0004166401014149692,
            "high": 0.00043500342443269905,
            "open": 0.0004166401014149692,
            "close": 0.00043500342443269905,
            "time": 1737054000000
        },
        {
            "low": 0.00043500342443269905,
            "high": 0.00043555672769054804,
            "open": 0.00043500342443269905,
            "close": 0.00043555672769054804,
            "time": 1737081000000
        },
        {
            "low": 0.00043555672769054804,
            "high": 0.00043574247872872585,
            "open": 0.00043555672769054804,
            "close": 0.00043574247872872585,
            "time": 1737091800000
        },
        {
            "low": 0.00043555672768961004,
            "high": 0.00043574247872872585,
            "open": 0.00043574247872872585,
            "close": 0.00043555672768961004,
            "time": 1737100800000
        }
    ];

      series.setData(data);

      chart.timeScale().fitContent();
    }




    initChart();
  }, []);
  return (
    <ImageWrapper>
      <Chart ref={chartContainerRef} />
    </ImageWrapper>
  );
};

export default Image;
