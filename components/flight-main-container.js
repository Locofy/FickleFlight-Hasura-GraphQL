import styles from "./flight-main-container.module.css";
const FlightMainContainer = ({
  flightOrigin,
  flightDestination,
  flightOriginCode,
  departureDate,
  returnDate,
}) => {
  return (
    <div className={styles.flightMainContainer}>
      <div className={styles.toAndFrom}>
        <b className={styles.sin}>{flightOrigin}</b>
        <img className={styles.flightIcons} alt="" src={flightDestination} />
        <b className={styles.lax}>{flightOriginCode}</b>
      </div>
      <div className={styles.departOn7Container}>
        <b>{departureDate}</b>
        <span>{returnDate}</span>
      </div>
    </div>
  );
};

export default FlightMainContainer;
