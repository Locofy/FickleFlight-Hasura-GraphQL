import { gql, useSubscription } from "@apollo/client";
import { differenceInHours, differenceInMinutes } from "date-fns";
import { differenceInDays, differenceInSeconds } from "date-fns/esm";
import { FunctionComponent, useEffect, useState } from "react";
import BookingCard from "../components/BookingCard";
import styles from "./RecentlyBooked.module.css";

type RecentlyBookedType = {
  depCode?: string | null;
  arrCode?: string | null;
};

type Airline = {
  logo: string;
  name: string;
};
type Airport = {
  code: string;
  name: string;
};
type BookingInfo = {
  timestamp: string;
  airline: Airline;
  departure: Airport;
  arrival: Airport;
  booked_on: string;
  price: string;
  cabin_class: string;
  passengers: string;
};

const GET_RECENT_BOOKINGS = gql`
  subscription getRecentBookings(
    $departure_code: String
    $arrival_code: String
  ) {
    recently_booked_stream(
      cursor: { initial_value: { timestamp: "2022-09-09" }, ordering: ASC }
      batch_size: 3
      where: {
        departure_code: { _eq: $departure_code }
        _and: { arrival_code: { _eq: $arrival_code } }
      }
    ) {
      airline {
        name
        logo
      }
      departure {
        code
        name
      }
      arrival {
        code
        name
      }
      timestamp
      booked_on
      price
      cabin_class
      passengers
    }
  }
`;

const RecentlyBooked: FunctionComponent<RecentlyBookedType> = ({
  depCode,
  arrCode,
}) => {
  const { loading, data } = useSubscription(GET_RECENT_BOOKINGS, {
    variables: { departure_code: depCode, arrival_code: arrCode },
  });

  const [bookings, setBookings] = useState<BookingInfo[]>([]);

  useEffect(() => {
    const newBookings = data?.recently_booked_stream;
    if (newBookings) {
      setBookings((bookings) => [...newBookings, ...bookings]);
    }
  }, [data]);

  return (
    <div className={styles.recentlyBookedDiv}>
      <div className={styles.recentlyBookedTitle}>
        <b className={styles.resultsB}>Recently booked</b>
        <img className={styles.vectorIcon} alt="" src="../vector-21.svg" />
      </div>
      <div className={styles.bookings}>
        {bookings.map((booking: BookingInfo, index: number) => (
          <BookingCard
            key={booking.timestamp}
            airlineName={booking.airline.name}
            price={booking.price}
            depCode={booking.departure.code}
            depName={booking.departure.name}
            arrCode={booking.arrival.code}
            arrName={booking.arrival.name}
            numPeople={booking.passengers}
            provider={booking.booked_on}
            timeAgo={`${getDateDiffFromNow(booking.timestamp)} ago!`}
            flightClass={booking.cabin_class}
            airlineLogo={booking.airline.logo}
            animate={bookings.length > 3 && index === 0}
          />
        ))}
      </div>
      {!!bookings.length && (
        <div className={styles.showMoreDiv}>
          <div className={styles.showMoreDiv1}>Show more</div>
          <img className={styles.iconBack} alt="" src="../icon--back.svg" />
        </div>
      )}
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

export default RecentlyBooked;
