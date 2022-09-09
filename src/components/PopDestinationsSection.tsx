import { gql, useQuery } from "@apollo/client";
import { FunctionComponent } from "react";
import DestinationCard from "../components/DestinationCard";
import styles from "./PopDestinationsSection.module.css";

type PopularDestination = {
  code: string;
  name: string;
  image: string;
  price: string;
};

const GET_POPULAR_DESTINATIONS = gql`
  query getHolidayDestinations {
    popular_destinations {
      code
      image
      name
      price
    }
  }
`;

const PopDestinationsSection: FunctionComponent = () => {
  const { data } = useQuery(GET_POPULAR_DESTINATIONS);

  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitlesDiv}>
        <div className={styles.titleContainerDiv}>
          <b className={styles.planYourNextTrip}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <button className={styles.viewAllTop}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="../arrowright.svg"
          />
        </button>
      </div>
      <div className={styles.cardsContainerDiv}>
        {data?.popular_destinations.map((pd: PopularDestination) => (
          <button className={styles.col1Button} key={pd.code}>
            <DestinationCard
              key={pd.code}
              bgImage={pd.image}
              destinationName={pd.name}
              price={pd.price}
            />
          </button>
        ))}
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img
          className={styles.arrowRightIcon}
          alt=""
          src="../arrowright1.svg"
        />
      </div>
    </div>
  );
};

export default PopDestinationsSection;
