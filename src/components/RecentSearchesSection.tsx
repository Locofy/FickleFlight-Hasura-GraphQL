import { FunctionComponent } from "react";
import RecentSearch from "../components/RecentSearch";
import styles from "./RecentSearchesSection.module.css";

const RecentSearchesSection: FunctionComponent = () => {
  return (
    <div className={styles.recentSearchesDiv}>
      <RecentSearch departure="SIN" arrival="LAX" departureDate="7 Sep 2021" />
      <RecentSearch departure="MY" arrival="DUB" departureDate=" 9 Sep 2021" />
    </div>
  );
};

export default RecentSearchesSection;
