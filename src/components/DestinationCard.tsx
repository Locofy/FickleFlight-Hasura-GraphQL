import { FunctionComponent } from "react";
import styles from "./DestinationCard.module.css";

type DestinationCardType = {
  destinationName?: string;
  price?: string;
  bgImage?: string;
};

const DestinationCard: FunctionComponent<DestinationCardType> = ({
  destinationName,
  price,
  bgImage,
}) => {
  return (
    <div className={styles.parisCardDiv}>
      <img className={styles.bgImageIcon} alt="" src={bgImage} />
      <div className={styles.destinationDetailsDiv}>
        <b className={styles.parisB}>{destinationName}</b>
        <div className={styles.detailsDiv}>
          <div className={styles.fromDiv}>from</div>
          <div className={styles.div}>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
