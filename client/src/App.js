import "./App.css";
import logo from "./Media/Logo_white.png";
import Launches from "./components/Launches";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Launch from "./components/Launch.js";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
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
          <Routes>
            <Route exact path="/" element={<Launches />} />
            <Route exact path="/launch/:id" element={<Launch />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
