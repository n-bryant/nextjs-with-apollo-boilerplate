import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

// https://dunglas.fr/2019/05/using-next-js-and-material-ui/

function createClient({ headers }) {
  return new ApolloClient({
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
}

export default withApollo(createClient);
