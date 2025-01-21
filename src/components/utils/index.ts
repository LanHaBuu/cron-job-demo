export const sliceAddress = (address: string, sliceNumber?: number) => {
  return address
    ? `${address.slice(0, sliceNumber ?? 6)}...${address.slice(
        -(sliceNumber ?? 6)
      )}`
    : "";
};

export const formatNumberWithCommas = (number: any) => {
  return Number(number).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

export const formatAmount = (balance: any, decimal: number) => {
  return balance / Math.pow(10, decimal);
};

export const isAddress = (address: string) => {
  if (!address.startsWith("0x")) {
    return false;
  }
  return true;
};

export function formatNumber(num: number) {
  if (num >= 1e9) {
    return `${(num / 1e9).toFixed(1).replace(/\.0$/, '')}B`
  }
  if (num >= 1e6) {
    return `${(num / 1e6).toFixed(1).replace(/\.0$/, '')}M`
  }
  if (num >= 1e3) {
    return `${(num / 1e3).toFixed(1).replace(/\.0$/, '')}K`
  }
  return num.toString()
}

