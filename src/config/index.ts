const sizes = {
  mobileS: "320px",
  mobileM: "576px",
  mobileL: "768px",
  tablet: "992px",
  laptop: "1200px",
  laptopL: "1400px",
  desktop: "1600px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const themes = {
  main: '#00ffcc',
  text: '#ffffff'
}


export const position = {
  heightHeader: "85px"
}

export const apiEndpoints = {
  nextApi: process.env.NEXT_PUBLIC_NEXT_API,
};

export const API_KEY_BLOCKBERRY = ['BUdU11uN0vSYiHY3apYciKvdfMfHDq','SylYIj419btYkmWL2hXRcmIUN2UWXY','pC44abFrvc0dPLy6CEOncBHYZMoJOu','oNfOuEWUqEkWtt4eEtAWA9I8iVNBhU','U5F9i2NLTIv057XZk53gklZtLykqMG']
export const API_KEY_BLOCK_VISION = ['2rqZL95LfzImLVcuVPNYUBzISCJ','2rqkA6JU99xjaP9CQaxYD3NZ8pF','2ro6Welr4BkNVpdldHemqspA3mm']

export const ADDRESS_SUI = '0x2::sui::SUI'
export const ADDRESS_SUI_AI = '0xbc732bc5f1e9a9f4bdf4c0672ee538dbf56c161afe04ff1de2176efabdf41f92::suai::SUAI'
