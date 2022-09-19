import { gql, useSubscription } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { format } from "date-fns";
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
    $start_from: timestamptz
  ) {
    recently_booked_stream(
      cursor: { initial_value: { timestamp: $start_from }, ordering: ASC }
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
    variables: {
      departure_code: depCode,
      arrival_code: arrCode,
      start_from: format(new Date(), "yyyy-01-01"),
    },
  });

  const [bookings, setBookings] = useState<BookingInfo[]>([]);

  useEffect(() => {
    const newBookings = data?.recently_booked_stream;
    if (newBookings) {
      setBookings((bookings) => [...newBookings.reverse(), ...bookings]);
    }
  }, [data]);

  if (!loading && !bookings.length) return null;

  return (
    <div className={styles.recentlyBookedDiv}>
      <div className={styles.recentlyBookedTitle}>
        <b className={styles.resultsB}>Recently booked</b>
        <img className={styles.vectorIcon} alt="" src="../vector-21.svg" />
      </div>
      <div className={styles.bookings}>
        {loading && <CircularProgress size={20} />}

        {bookings.map((booking: BookingInfo) => (
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
            timestamp={booking.timestamp}
            flightClass={booking.cabin_class}
            airlineLogo={booking.airline.logo}
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

export default RecentlyBooked;
