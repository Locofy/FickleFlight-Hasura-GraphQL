import { FunctionComponent } from "react";
import styles from "./RecommendedCard.module.css";

type RecommendedCardType = {
  cardImage?: string;
  location?: string;
  duration?: string;
  price?: string;
};

const RecommendedCard: FunctionComponent<RecommendedCardType> = ({
  cardImage,
  location,
  duration,
  price,
}) => {
  return (
    <button className={styles.recCard1}>
      <img className={styles.unsplash5MV818tzxeoIcon} alt="" src={cardImage} />
      <div className={styles.holidayDetailsDiv}>
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <div className={styles.baliDiv}>{location}</div>
            <div className={styles.d3NDiv}>{duration}</div>
          </div>
          <div className={styles.div}>{price}</div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedCard;
