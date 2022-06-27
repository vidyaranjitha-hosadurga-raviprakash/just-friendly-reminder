export const colorPlatte = {
  text: {
    primary: "#fafafa",
    secondary: "#00796b",
    secondaryLight: "#b2dfdb",
    black: "#212121",
    brown: "#3e2723",
    blue: "#311b92",
    green: "#1b5e20",
  },
};
export const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const flexCenterColumn = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export const imageBlendModeList = [
  {
    mode: "hue",
    color: colorPlatte.text.blue,
  },
  {
    mode: "multiply",
    color: colorPlatte.text.primary,
  },

  {
    mode: "difference",
    color: colorPlatte.text.primary,
  },
  {
    mode: "screen",
    color: colorPlatte.text.primary,
  },
  {
    mode: "overlay",
    color: colorPlatte.text.secondaryLight,
  },
  {
    mode: "normal",
    color: colorPlatte.text.secondaryLight,
  },
  {
    mode: "saturation",
    color: colorPlatte.text.primary,
  },
];
