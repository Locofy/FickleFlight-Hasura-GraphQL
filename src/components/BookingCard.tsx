import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from "date-fns";
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
  timestamp?: string;
  flightClass?: string;
  airlineLogo?: string;
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
  timestamp,
  flightClass,
  airlineLogo,
}) => {
  const secondsAgo = getDateDiffInSeconds(timestamp!);

  return (
    <div
      className={
        secondsAgo >= 0 && secondsAgo < 10
          ? styles.animate
          : styles.bookingCardDiv
      }
    >
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
        <div className={styles.sAgoDiv}>
          {getDateDiffFromNow(timestamp!)} ago!
        </div>
      </div>
    </div>
  );
};

/**
 * @param timestamp i.e. "2022-09-14T14:53:36.044158+00:00"
 */
function getDateDiffFromNow(timestamp: string) {
  const now = new Date();
  const ts = new Date(timestamp);
  const seconds = differenceInSeconds(now, ts);
  if (seconds < 60) return `${seconds || 1}s`;

  const minutes = differenceInMinutes(now, ts);
  if (minutes < 60) return `${minutes}m`;

  const hours = differenceInHours(now, ts);
  if (hours < 24) return `${hours}h`;

  const days = differenceInDays(now, ts);
  return `${days}d`;
}

function getDateDiffInSeconds(timestamp: string) {
  const now = new Date();
  const ts = new Date(timestamp);
  return differenceInSeconds(now, ts);
}

export default BookingCard;
