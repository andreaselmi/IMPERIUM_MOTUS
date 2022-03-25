const colors = {
  neon: "#E1FF2C",
  black: "#131313",
  white: "#FFFFFF",
  grey: "#757575",
  red: "#E11900",
  orange: "#FFA14F",
  green: "#4CD60C",
};

export default {
  foregrounds: {
    foundations: {
      accent: colors.neon,
      dark: colors.black,
      muted: colors.grey,
      light: colors.white,
    },
    colorRoles: {
      success: colors.green,
      warning: colors.orange,
      danger: colors.red,
    },
  },
  backgrounds: {
    foundations: {
      dark: colors.black,
      light: colors.white,
      neon: colors.neon,
    },
  },
};
