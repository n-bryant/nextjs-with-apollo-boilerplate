import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

export const createClient = ({ headers }) =>
  new ApolloClient({
    uri:
      process.env.NODE_ENV === "development"
        ? process.env.endpoint
        : process.env.prodEndpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });

// # https://www.apollographql.com/docs/react/performance/server-side-rendering/#using-getdatafromtree
export default withApollo(createClient, { getDataFromTree: "ssr" });
