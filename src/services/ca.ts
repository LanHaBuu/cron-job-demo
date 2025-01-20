import axios from "axios";

const getCAAddress = async (caAddress: string) => {
  try {
    const url = `https://api.suiai.fun/api/pools?populate=*&sort=volume_24h:desc&pagination[page]=1&pagination[pageSize]=24&filters[$or][0][name][$containsi]=${caAddress}&filters[$or][1][symbol][$containsi]=${caAddress}&filters[$or][2][token_address][$containsi]=${caAddress}`
    const response = await axios.get(url);
    const data = response?.data?.data[0];
    return data
  } catch (e) {
    return null;
  }
};

const caService = {
    getCAAddress,
};
export default caService;
