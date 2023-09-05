import { useMemo } from "react";
import styles from "./tuscany-card-restauurant.module.css";
const TuscanyCardRestauurant = ({
  tuscanyCardBackgroundImage,
  tuscany,
  tuscanyDisplay,
  detailsWidth,
  prop,
  divWidth,
  fromLeft,
}) => {
  const tuscanyCardStyle = useMemo(() => {
    return {
      backgroundImage: tuscanyCardBackgroundImage,
    };
  }, [tuscanyCardBackgroundImage]);

  const tuscanyStyle = useMemo(() => {
    return {
      display: tuscanyDisplay,
    };
  }, [tuscanyDisplay]);

  const detailsStyle = useMemo(() => {
    return {
      width: detailsWidth,
    };
  }, [detailsWidth]);

  const divStyle = useMemo(() => {
    return {
      width: divWidth,
    };
  }, [divWidth]);

  const fromStyle = useMemo(() => {
    return {
      left: fromLeft,
    };
  }, [fromLeft]);

  return (
    <div className={styles.tuscanycard} style={tuscanyCardStyle}>
      <div className={styles.destinationDetails}>
        <b className={styles.tuscany} style={tuscanyStyle}>
          {tuscany}
        </b>
        <div className={styles.details} style={detailsStyle}>
          <div className={styles.div} style={divStyle}>
            {prop}
          </div>
          <div className={styles.from} style={fromStyle}>
            from
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuscanyCardRestauurant;
