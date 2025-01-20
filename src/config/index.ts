const sizes = {
  mobileS: '320px',
  mobileM: '576px',
  mobileL: '768px',
  tablet: '992px',
  laptop: '1200px',
  laptopL: '1400px',
  desktop: '1600px',
}

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
}

export const themes = {
  main: '#216e05',
  text: '#ffffff',
}

export const position = {
  heightHeader: '85px',
}

export const apiEndpoints = {
  nextApi: process.env.NEXT_PUBLIC_NEXT_API,
}

export const API_KEY_BLOCK_VISION = [
  '2rtl5512pARiHNF6pK2UfKbhjj2',
  '2rtkmijbzp1fjH5AzGiSiiOpBDd',
]

export const ADDRESS_SUI = '0x2::sui::SUI'
export const ADDRESS_SUI_AI =
  '0xbc732bc5f1e9a9f4bdf4c0672ee538dbf56c161afe04ff1de2176efabdf41f92::suai::SUAI'
