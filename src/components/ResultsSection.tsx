import { FunctionComponent } from "react";
import ResultsCard from "../components/ResultsCard";
import styles from "./ResultsSection.module.css";

const ResultsSection: FunctionComponent = () => {
  return (
    <div className={styles.flightCardsDiv}>
      <ResultsCard
        airlineLogo="../turkish.svg"
        airlineName="Turkish Airlines"
        departTime="11:35 PM"
        duration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        price="S$ 723"
        depCode="SIN"
        arrCode="LAX"
      />
      <ResultsCard
        airlineLogo="../sia.svg"
        airlineName="Singapore Airlines"
        departTime="8:45 PM"
        duration="15H 10M, 2-stops"
        arrivalTime="7:55 PM"
        price="S$ 900"
        depCode="SIN"
        arrCode="LAX"
      />
      <ResultsCard
        airlineLogo="../japan.svg"
        airlineName="Japan Airlines"
        departTime="8:20 PM"
        duration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        price="S$ 859"
        depCode="SIN"
        arrCode="LAX"
      />
      <ResultsCard
        airlineLogo="../ana.svg"
        airlineName="ANA"
        departTime="6:35 PM"
        duration="19H 15M, 1-stop"
        arrivalTime="9:50 PM"
        price="S$ 936"
        depCode="SIN"
        arrCode="LAX"
      />
      <ResultsCard
        airlineLogo="../americanairlines.svg"
        airlineName="American Airlines"
        departTime="8:20 PM"
        duration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        price="S$ 936"
        depCode="SIN"
        arrCode="LAX"
      />
      <ResultsCard
        airlineLogo="../turkish1.svg"
        airlineName="Turkish Airlines"
        departTime="11:35 PM"
        duration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        price="S$ 673"
        depCode="SIN"
        arrCode="LAX"
      />
      <ResultsCard
        airlineLogo="../japan1.svg"
        airlineName="Japan Airlines"
        departTime="10:25 PM"
        duration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        price="S$ 859"
        depCode="SIN"
        arrCode="LAX"
      />
      <ResultsCard
        airlineLogo="../americanairlines1.svg"
        airlineName="American Airlines"
        departTime="8:20 PM"
        duration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        price="S$ 936"
        depCode="SIN"
        arrCode="LAX"
      />
      <div className={styles.primaryButtonDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.searchFlightsDiv}>Show more results</div>
      </div>
    </div>
  );
};

export default ResultsSection;
