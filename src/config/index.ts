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
  main: '#03c1ff',
  text: '#ffffff'
}
