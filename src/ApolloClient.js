import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "https://movieql-tdmclghail.now.sh/"
});

export default client;