import { FunctionComponent } from "react";
import DestinationCard from "../components/DestinationCard";
import styles from "./PopDestinationsSection.module.css";

const PopDestinationsSection: FunctionComponent = () => {
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
        <button className={styles.col1Button}>
          <DestinationCard
            destinationName="Paris"
            price="$699"
            bgImage="../bg-image@2x.png"
          />
        </button>
        <button className={styles.col1Button}>
          <DestinationCard
            destinationName="Greece"
            price="$1079"
            bgImage="../bg-image1@2x.png"
          />
        </button>
        <button className={styles.col1Button}>
          <DestinationCard
            destinationName="Norway"
            price="$895"
            bgImage="../bg-image2@2x.png"
          />
        </button>
        <button className={styles.col1Button}>
          <DestinationCard
            destinationName="Tuscany"
            price="$1245"
            bgImage="../bg-image3@2x.png"
          />
        </button>
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
