export const HeaderColumns = [
  {
    title: "Token",
    width: 300,
  },
  {
    title: "Amount",
    width: 200,
  },
  {
    title: "Price",
    width: 200,
  },
];

export const TableColWidth = {
  token: 300,
  amount: 200,
  price: 200,
};

export const HeaderActivityColumns = [
  {
    title: "Type",
    width: 250,
  },
  {
    title: "Activity Details",
    width: 300,
  },
  {
    title: "Activity With",
    width: 350,
  },
  {
    title: "Gas Fee",
    width: 200,
  },
];

export const TableActivityColWidth = {
  type: 250,
  details: 300,
  with: 350,
  gas: 200,
};


export const getUrlTx = (txAddress:string) => {
  return `https://suiscan.xyz/mainnet/tx/${txAddress}`
}

export const getUrlToken = (tokenAddress:string) => {
  return `https://suiscan.xyz/mainnet/coin/${tokenAddress}/txs`
}

export const getActivityAccount = (address:string) => {
  return `https://suiscan.xyz/mainnet/account/${address}`
}

