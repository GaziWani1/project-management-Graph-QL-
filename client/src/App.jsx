import React from "react";
import Header from "./components/Header";
import { ApolloProvider , InMemoryCache , ApolloClient } from "@apollo/client";
import { Clients } from "./components/Clients";

const client = new ApolloClient({
  uri:'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

const App = () => {
  return  <>
  <ApolloProvider client={client}>
   <Header />
   <div className="w-full px-10 mt-5">
    <Clients />
  </div>
  </ApolloProvider>
  </>
};

export default App;
