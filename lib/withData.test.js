import ApolloClient from "apollo-boost";
import { createClient } from "./withData";
jest.mock("apollo-boost");

describe("createClient", () => {
  process.env.endpoint = "foo";
  process.env.prodEndpoint = "bar";

  it("should create a new apollo client with a uri pointing to an environment specific location", () => {
    createClient({ headers: {} });
    expect(ApolloClient).toHaveBeenCalled();
    expect(ApolloClient.mock.calls[0][0].uri).toEqual(process.env.prodEndpoint);

    ApolloClient.mockClear();
    process.env.NODE_ENV = "development";
    createClient({ headers: {} });
    expect(ApolloClient.mock.calls[0][0].uri).toEqual(process.env.endpoint);
  });
});
