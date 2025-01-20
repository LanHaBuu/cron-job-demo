export interface IWalletInfo {
    balance: number,
    balanceUsd: number,
    coinName: string,
    coinPrice: number,
    coinSymbol: string,
    decimals: number,
    coinType: string,
    logo: string,
    verified: boolean
}

export interface ICoinChange {
    amount: string,
    coinAddress: string,
    decimal: number,
    logo: string,
    symbol: string,
}

export interface IInteractAddresses {
    address: string,
    logo: string,
    name: number,
}
export interface IWalletActivity {
    transaction: string,
    coinChanges: ICoinChange[],
    sender: string,
    timestamp: string,
    type: string,
    interactAddresses: IInteractAddresses[],
    gasFee: string
}