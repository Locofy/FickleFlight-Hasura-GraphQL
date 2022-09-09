import { FunctionComponent, useEffect } from "react";
import ResultsCard from "../components/ResultsCard";
import styles from "./ResultsSection.module.css";
import { gql, useMutation, useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";

type Airline = {
  logo: string;
  name: string;
};
type FlightInfo = {
  id: string;
  price: string;
  duration: string;
  departure_time: string;
  arrival_time: string;
  departure_code: string;
  arrival_code: string;
  airline: Airline;
};

const GET_ROUTES = gql`
  query getRoutes($departure_code: String, $arrival_code: String) {
    routes(
      limit: 10
      where: {
        departure_code: { _eq: $departure_code }
        _and: { arrival_code: { _eq: $arrival_code } }
      }
    ) {
      id
      price
      duration
      departure_time
      arrival_code
      airline {
        logo
        name
      }
      arrival_time
      departure_code
    }
  }
`;

const ADD_TO_RECENT_SEARCHES = gql`
  mutation RecentSearchesMutation(
    $arrival_code: String
    $departure_code: String
    $departure_date: String
  ) {
    insert_recent_searches(
      objects: {
        arrival_code: $arrival_code
        departure_code: $departure_code
        departure_date: $departure_date
      }
    ) {
      returning {
        timestamp
      }
    }
  }
`;

const ResultsSection: FunctionComponent = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const departure_code = urlParams.get("departure") || null;
  const arrival_code = urlParams.get("arrival") || null;
  const date = urlParams.get("date");

  // Read query params from URL and pass it to GraphQL query as variables
  const { loading, data } = useQuery(GET_ROUTES, {
    variables: { departure_code, arrival_code },
  });

  // Mutation query
  const [addToRecentSearches] = useMutation(ADD_TO_RECENT_SEARCHES);

  // run a mutation query and add current route to recent searches
  useEffect(() => {
    if (data && data.routes && date && departure_code && arrival_code) {
      addToRecentSearches({
        variables: {
          departure_code,
          arrival_code,
          departure_date: date,
        },
      });
    }
  }, [data]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={styles.flightCardsDiv}>
      {data?.routes?.map((f: FlightInfo) => (
        <ResultsCard
          key={f.id}
          airlineLogo={f.airline.logo}
          airlineName={f.airline.name}
          departTime={f.departure_time}
          duration={f.duration}
          arrivalTime={f.arrival_time}
          price={f.price}
          depCode={f.departure_code}
          arrCode={f.arrival_code}
        />
      ))}

      {!!data?.routes?.length && (
        <div className={styles.primaryButtonDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.searchFlightsDiv}>Show more results</div>
        </div>
      )}
    </div>
  );
};

export default ResultsSection;
