import oc from "./opencolors";

const palette = {
  common: Object.assign(
    {
      white: "#FFFFFF",
      black: "#000000"
    },
    oc
  ),
  notification: {
    confirmation: oc.green5,
    warning: oc.yellow8,
    error: oc.red6,
    info: oc.blue5
  },
  link: {
    default: oc.blue6,
    visited: oc.blue6,
    hover: oc.blue4,
    active: oc.blue8,
    disabled: oc.gray5
  },
  text: {
    primary: oc.gray9,
    secondary: oc.gray9
  }
};

export default palette;
