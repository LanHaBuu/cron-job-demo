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