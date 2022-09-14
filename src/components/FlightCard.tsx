import { FunctionComponent } from "react";
import styles from "./FlightCard.module.css";

type FlightCardType = {
  airlineLogo?: string;
  airlineName?: string;
  departTime?: string;
  duration?: string;
  arrivalTime?: string;
  price?: string;
  depCode?: string;
  arrCode?: string;
};

const FlightCard: FunctionComponent<FlightCardType> = ({
  airlineLogo,
  airlineName,
  departTime,
  duration,
  arrivalTime,
  price,
  depCode,
  arrCode,
}) => {
  return (
    <div className={styles.flightCardDiv}>
      <div className={styles.airlineSectionDiv}>
        <img className={styles.turkishIcon} alt="" src={airlineLogo} />
        <div className={styles.singaporeAirlinesDiv}>{airlineName}</div>
      </div>
      <div className={styles.flightDetailsSection}>
        <div className={styles.departureDetailsDiv}>
          <div className={styles.aMDiv}>{departTime}</div>
          <div className={styles.sINDiv}>{depCode}</div>
        </div>
        <div className={styles.flightDurationDiv}>
          <img className={styles.flightIcon} alt="" src="../flighticon.svg" />
          <div className={styles.h55MNonStop}>{duration}</div>
        </div>
        <div className={styles.arrivalDetailsDiv}>
          <div className={styles.aMDiv}>{arrivalTime}</div>
          <div className={styles.sINDiv1}>{arrCode}</div>
        </div>
      </div>
      <div className={styles.priceSectionDiv}>
        <img className={styles.vectorIcon} alt="" src="../vector-1.svg" />
        <b className={styles.s730B}>{price}</b>
      </div>
    </div>
  );
};

export default FlightCard;
