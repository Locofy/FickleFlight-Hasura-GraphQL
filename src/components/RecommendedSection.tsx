import { FunctionComponent } from "react";
import RecommendedCard from "../components/RecommendedCard";
import styles from "./RecommendedSection.module.css";

const RecommendedSection: FunctionComponent = () => {
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
        <RecommendedCard
          cardImage="../unsplash5mv818tzxeo@2x.png"
          location="Bali"
          duration="4D3N"
          price="$899"
        />
        <RecommendedCard
          cardImage="../switzerlandimage@2x.png"
          location="Swiss"
          duration="6D5N"
          price="$900"
        />
        <RecommendedCard
          cardImage="../boracayimage@2x.png"
          location="Boracay"
          duration="5D4N"
          price="$699"
        />
        <RecommendedCard
          cardImage="../palawanimage@2x.png"
          location="Palawan"
          duration="4D3N"
          price="$789"
        />
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
