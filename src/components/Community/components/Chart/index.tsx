import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { createChart, IChartApi } from "lightweight-charts";
import BarChartLoaderSVG from "@/components/icons/BarChartLoaderSVG";
import { useChart } from "./hooks/useChart";

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IChart {
  caInfo: any;
}

const Chart = ({ caInfo }: IChart) => {
  const { data: chart } = useChart(caInfo?.pool_id);
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartCreated, setChartCreated] = useState<IChartApi | undefined>();
  const [chartWidth, setChartWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        setChartWidth(chartRef.current.clientWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!chartRef?.current) return;
    if (chart?.length > 0) {
      const chartConfig = createChart(chartRef.current, {
        layout: {
          textColor: "white",
          background: {
            color: "black",
          },
          attributionLogo: false,
        },
        width: chartWidth,
        height: 300,
        crosshair: {
          mode: 0,
        },
        grid: {
          vertLines: {
            color: "rgba(255, 255, 255, 0.1)",
            style: 1,
          },
          horzLines: {
            color: "rgba(255, 255, 255, 0.1)",
            style: 1,
          },
        },
        timeScale: {
          borderVisible: false,
          secondsVisible: false,
          tickMarkFormatter: (unixTime: number) => {
            return dayjs.unix(unixTime).format("hh:mm");
          },
        },
        watermark: {
          visible: false,
        },
      });
      const series = chartConfig.addCandlestickSeries({
        priceFormat: {
          type: "price",
          precision: 6,
          minMove: 0.000001,
        },
      });

      series.setData(chart);

      setChartCreated(chartConfig);

      chartConfig.timeScale();

      // eslint-disable-next-line consistent-return
      return () => {
        chartConfig.remove();
      };
    }
  }, [chart, chartWidth]);

  return (
    <>
      {!chartCreated && <BarChartLoaderSVG />}
      <ChartWrapper ref={chartRef} />
    </>
  );
};

export default Chart;
