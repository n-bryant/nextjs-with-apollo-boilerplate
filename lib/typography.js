import palette from "./palette";

const fontFamily = "Roboto, Helvetica, Arial, sans-serif";
const fontSize = 14;
const lineHeight = 20;
const htmlFontSize = 16;

// Improves font rendering in supported browsers
const fontSmoothing = {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale"
};

const fontWeights = {
  fontWeightRegular: "400",
  fontWeightMedium: "500",
  fontWeightBold: "700"
};
const headingBaseStyles = Object.assign(
  {
    margin: "0",
    fontWeight: fontWeights.fontWeightBold,
    letterSpacing: "normal"
  },
  fontSmoothing
);
const bodyBaseStyles = Object.assign(
  {
    margin: "0",
    fontWeight: fontWeights.fontWeightRegular,
    letterSpacing: "normal"
  },
  fontSmoothing
);
module.exports = Object.assign(
  {
    useNextVariants: true,
    fontFamily: fontFamily,
    fontSize: fontSize,
    htmlFontSize: htmlFontSize,
    lineHeight: lineHeight
  },
  fontWeights,
  {
    // Headings
    h1: Object.assign({}, headingBaseStyles, {
      fontSize: "24px",
      lineHeight: "33px"
    }),
    h2: Object.assign({}, headingBaseStyles, {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: fontWeights.fontWeightMedium
    }),
    h3: Object.assign({}, headingBaseStyles, {
      fontSize: "18px",
      lineHeight: "25px"
    }),
    h4: Object.assign({}, headingBaseStyles, {
      fontSize: "16px",
      lineHeight: "23px",
      fontWeight: fontWeights.fontWeightMedium
    }),
    h5: Object.assign({}, headingBaseStyles, {
      fontSize: "14px",
      lineHeight: "20px"
    }),
    h6: Object.assign({}, headingBaseStyles, {
      fontSize: "12px",
      lineHeight: "17px"
    }),
    // Body Copy
    bodySmall: Object.assign({}, bodyBaseStyles, {
      fontSize: "12px",
      lineHeight: "17px"
    }),
    bodyDefault: Object.assign({}, bodyBaseStyles, {
      fontSize: "14px",
      lineHeight: "20px"
    }),
    bodyLarge: Object.assign({}, bodyBaseStyles, {
      fontSize: "16px",
      lineHeight: "23px"
    }),
    // Links
    link: Object.assign(
      {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: fontWeights.fontWeightBold,
        letterSpacing: "normal"
      },
      fontSmoothing,
      {
        color: palette.link.active,
        "&:active": {
          color: palette.link.active
        },
        "&:visited": {
          color: palette.link.visited
        },
        "&:hover": {
          color: palette.link.hover
        },
        "&:disabled": {
          color: palette.link.disabled
        }
      }
    ),
    // Buttons
    button: Object.assign(
      {
        fontSize: "15px",
        lineHeight: "21px",
        fontWeight: fontWeights.fontWeightBold,
        letterSpacing: "0.25px"
      },
      fontSmoothing
    )
  }
);
