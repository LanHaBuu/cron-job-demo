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

export const formatAmount = (amount: any, decimal: number) => {
  return amount / Math.pow(10, decimal);
};
