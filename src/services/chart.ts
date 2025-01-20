import axios from "axios";

const URL_CHART_SUI_AI = `https://api.suiai.fun/api/trades?filters[pool_id]=`;

const getChart = async (pool: string) => {
  try {
    const url = `${URL_CHART_SUI_AI}${pool}`;
    const response = await axios.get(url);
    const data = response?.data?.results;
    if (data?.length > 0) {
        const chartData = data[0]?.trade_15m.map(({ timestamp, ...rest }: any) => ({
          ...rest,
          time: timestamp,
        }));
      
        return {
          poolId: data[0]?.pool_id,
          chartData,
        };
      }
  } catch (e) {
    return null;
  }
};

const chartService = {
  getChart,
};
export default chartService;
