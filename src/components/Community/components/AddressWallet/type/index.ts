export interface IWalletInfo {
    coinType: string,
    name: string,
    symbol: string,
    decimals: number,
    balance: string,
    price: string,
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