import React from "react";
import App from "next/app";

import Page from "../src/components/Page";
import { ApolloProvider } from "react-apollo";
import CssBaseline from "@material-ui/core/CssBaseline";

import withData from "../lib/withData";
import NextNProgress from "../src/components/NextNProgress";

export class BoilerplateApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // expose query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <NextNProgress />
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </React.Fragment>
    );
  }
}

export default withData(BoilerplateApp);
