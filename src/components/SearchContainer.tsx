import { FunctionComponent } from "react";
import SearchForm from "../components/SearchForm";
import styles from "./SearchContainer.module.css";

const SearchContainer: FunctionComponent = () => {
  return (
    <div className={styles.searchContainerDiv}>
      <div className={styles.titleDiv}>
        <div
          className={styles.letsExploreTravelTheWor}
        >{`Let’s explore & travel the world`}</div>
        <div className={styles.findTheBestDestinationsAnd}>
          Find the best destinations and the most popular stays!
        </div>
      </div>
      <SearchForm />
    </div>
  );
};

export default SearchContainer;
