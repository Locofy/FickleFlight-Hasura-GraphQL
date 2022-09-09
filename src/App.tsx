import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import HotelsPage from "./pages/HotelsPage";
import ResultsPage from "./pages/ResultsPage";
import { useEffect, useState } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const createApolloClient = (authToken: string) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://locofy.hasura.app/v1/graphql",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }),
    cache: new InMemoryCache(),
    name: "FickleFlight",
    version: "1.0.0",
  });
};

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [client] = useState(createApolloClient("demo"));

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "Fickle Flight";
        break;
      case "/hotels-page":
        title = "Hotel results";
        metaDescription = "";
        break;
      case "/results-page":
        {
          const urlParams = new URLSearchParams(window.location.search);
          const depCode = urlParams.get("dep_code");
          const arrCode = urlParams.get("arr_code");
          title = `${depCode} → ${arrCode} Flight results`;
        }
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/hotels-page" element={<HotelsPage />} />

        <Route path="/flight-results" element={<ResultsPage />} />
      </Routes>
    </ApolloProvider>
  );
}
export default App;
