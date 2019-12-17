const styles = theme => ({
  root: {
    margin: theme.spacing(6, 0, 3)
  },
  lightBulb: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1)
  },
  link: {
    "&:hover": {
      textDecoration: "none"
    }
  }
});

export default styles;
