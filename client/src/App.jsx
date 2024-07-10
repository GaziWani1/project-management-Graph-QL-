import React from "react";
import Header from "./components/Header";
import { ApolloProvider , InMemoryCache , ApolloClient } from "@apollo/client";
import { Clients } from "./components/Clients";
import AddClientModel from "./components/AddClientModel";

const cache = new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        clients:{
          merge(existing,incoming){
            return incoming
          }
        },
        projects:{

        }
      }
    }
  }
})

const client = new ApolloClient({
  uri:'http://localhost:5000/graphql',
  cache
})

const App = () => {
  return  <>
  <ApolloProvider client={client}>
   <Header />
   <div className="w-full px-2 md:px-10 mt-5">
    <AddClientModel/>
    <Clients />
  </div>
  </ApolloProvider>
  </>
};

export default App;
