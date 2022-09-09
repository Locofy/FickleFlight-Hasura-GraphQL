import { gql, useQuery } from "@apollo/client";
import { FunctionComponent } from "react";
import RecommendedCard from "../components/RecommendedCard";
import styles from "./RecommendedSection.module.css";

type HolidayDestination = {
  code: string;
  name: string;
  image: string;
  price: string;
  duration: string;
};

const GET_RECOMMENDED_HOLIDAYS = gql`
  query getHolidayDestinations {
    recommended_holidays {
      code
      image
      name
      price
      duration
    }
  }
`;

const RecommendedSection: FunctionComponent = () => {
  const { data } = useQuery(GET_RECOMMENDED_HOLIDAYS);

  return (
    <div className={styles.recommendedHolidaysContainer}>
      <div className={styles.recTitleDiv}>
        <b className={styles.recommendedHolidaysB}>Recommended Holidays</b>
        <button className={styles.frameButton}>
          <div className={styles.viewAllHolidays}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="../arrowright2.svg"
          />
        </button>
      </div>
      <div className={styles.recCardsContainerDiv}>
        {data?.recommended_holidays.map((item: HolidayDestination) => (
          <RecommendedCard
            key={item.code}
            cardImage={item.image}
            location={item.name}
            duration={item.duration}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img
          className={styles.arrowRightIcon}
          alt=""
          src="../arrowright3.svg"
        />
      </div>
    </div>
  );
};

export default RecommendedSection;
