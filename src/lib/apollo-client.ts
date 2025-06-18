import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.user.respectmagazine.edu.lk/graphql",
  cache: new InMemoryCache(),
});

export default client;
