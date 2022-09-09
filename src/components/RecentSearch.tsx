import { FunctionComponent } from "react";
import styles from "./RecentSearch.module.css";

type RecentSearchType = {
  departure?: string;
  arrival?: string;
  departureDate?: string;
};

const RecentSearch: FunctionComponent<RecentSearchType> = ({
  departure,
  arrival,
  departureDate,
}) => {
  return (
    <div className={styles.flightMainContainer}>
      <div className={styles.toAndFrom}>
        <div className={styles.fromDetailsDiv}>
          <b className={styles.sINB}>{departure}</b>
        </div>
        <img className={styles.durationIcon} alt="" src="../duration.svg" />
        <div className={styles.toDetailsDiv}>
          <b className={styles.lAXB}>{arrival}</b>
        </div>
      </div>
      <div className={styles.departOn7Sep2021}>
        <b>{`Depart on: `}</b>
        <span>{departureDate}</span>
      </div>
    </div>
  );
};

export default RecentSearch;
