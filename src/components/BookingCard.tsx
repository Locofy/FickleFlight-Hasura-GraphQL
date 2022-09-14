import { FunctionComponent } from "react";
import styles from "./BookingCard.module.css";

type BookingCardType = {
  airlineName?: string;
  price?: string;
  depCode?: string;
  depName?: string;
  arrCode?: string;
  arrName?: string;
  numPeople?: string;
  provider?: string;
  timeAgo?: string;
  flightClass?: string;
  airlineLogo?: string;
  animate?: boolean;
};

const BookingCard: FunctionComponent<BookingCardType> = ({
  airlineName,
  price,
  depCode,
  depName,
  arrCode,
  arrName,
  numPeople,
  provider,
  timeAgo,
  flightClass,
  airlineLogo,
  animate,
}) => {
  return (
    <div className={animate ? styles.animate : styles.bookingCardDiv}>
      <div className={styles.airlinePriceDiv}>
        <div className={styles.airlineDiv}>
          <img className={styles.icon} alt="" src={airlineLogo} />
          <div className={styles.singaporeAirlinesDiv}>{airlineName}</div>
        </div>
        <div className={styles.div}>{price}</div>
      </div>
      <div className={styles.locationsDiv}>
        <div className={styles.departureDiv}>
          <div className={styles.sINDiv}>{depCode}</div>
          <div className={styles.singaporeDiv}>{depName}</div>
        </div>
        <img className={styles.flightIcon} alt="" src="../flight-icon.svg" />
        <div className={styles.arrivalDiv}>
          <div className={styles.sINDiv}>{arrCode}</div>
          <div className={styles.singaporeDiv}>{arrName}</div>
        </div>
      </div>
      <div className={styles.detailsDiv}>
        <div className={styles.classDiv}>
          <img className={styles.classIcon} alt="" src="../class-icon.svg" />
          <div className={styles.singaporeAirlinesDiv}>{flightClass}</div>
        </div>
        <div className={styles.classDiv}>
          <img className={styles.classIcon} alt="" src="../calender.svg" />
          <div className={styles.singaporeAirlinesDiv}>{numPeople}</div>
        </div>
      </div>
      <div className={styles.providerDiv}>
        <div className={styles.singaporeAirlinesDiv}>
          <span>{`Booked on `}</span>
          <span className={styles.expediaSpan}>{provider}</span>
        </div>
        <div className={styles.sAgoDiv}>{timeAgo}</div>
      </div>
    </div>
  );
};

export default BookingCard;
