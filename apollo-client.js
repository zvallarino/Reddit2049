
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://hepingjie.stepzen.net/api/plinking-butterfly/__graphql",
    headers:{
      Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`
    },
    cache: new InMemoryCache(),
});

export default client;