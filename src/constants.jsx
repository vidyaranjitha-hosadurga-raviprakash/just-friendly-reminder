const defaultMsgValue = false;
export const msgList = [
  {
    message: "Compare",
    value: defaultMsgValue,
    expectedVal: false,
  },
  {
    message: "Be happy",
    value: defaultMsgValue,
    expectedVal: true,
  },
  {
    message: "Be grateful",
    value: defaultMsgValue,
    expectedVal: true,
  },

  {
    message: "Be kind",
    value: defaultMsgValue,
    expectedVal: true,
  },
  {
    message: "Be yourself",
    value: defaultMsgValue,
    expectedVal: true,
  },
];

export const footerProps = {
  footerName: "@prismatic.dreams | 2022",
  typography: {
    color: "text.secondary",
    variant: "subtitle2",
    sx: {
      backgroundColor: "text.primary",
      borderRadius: "1rem",
      padding: "0.4rem 1rem",
      opacity: "0.5",
      fontWeight: "fontWeightBold",
    },
  },
};
