import { createMuiTheme } from "@material-ui/core/styles";
import palette from "./palette";
import typography from "./typography";

// Create a theme instance.
const theme = createMuiTheme({
  palette,
  typography
});

export default theme;
