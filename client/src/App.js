import "./App.css";
import logo from "./Media/Logo_white.png";
import Launches from "./components/Launches";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img
          src={logo}
          alt="SpaceX"
          style={{
            width: 300,
            display: "flex",
            position: "relative",
            marginInline: "auto",
            top: "-3rem",
          }}
        ></img>
        {/* <LaunchesQuery /> */}
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
