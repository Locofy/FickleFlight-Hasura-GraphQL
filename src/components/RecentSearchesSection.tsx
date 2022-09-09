import { gql, useQuery } from "@apollo/client";
import { FunctionComponent } from "react";
import RecentSearch from "../components/RecentSearch";
import styles from "./RecentSearchesSection.module.css";

type RecentSearch = {
  departure_code: string;
  arrival_code: string;
  departure_date: string;
};

const GET_RECENT_SEARCHES = gql`
  query GetRecentSearches {
    recent_searches(limit: 2, order_by: { timestamp: desc }) {
      departure_date
      timestamp
      departure_code
      arrival_code
    }
  }
`;

const RecentSearchesSection: FunctionComponent = () => {
  const { data } = useQuery(GET_RECENT_SEARCHES, {
    fetchPolicy: "no-cache",
  });

  return (
    <div className={styles.recentSearchesDiv}>
      {data?.recent_searches?.map((s: RecentSearch, index: number) => (
        <RecentSearch
          key={index}
          departure={s.departure_code}
          arrival={s.arrival_code}
          departureDate={s.departure_date}
        />
      ))}
    </div>
  );
};

export default RecentSearchesSection;
