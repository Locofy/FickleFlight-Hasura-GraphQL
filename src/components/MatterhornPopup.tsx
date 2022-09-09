import { FunctionComponent } from "react";
import styles from "./MatterhornPopup.module.css";

type MatterhornPopupType = {
  onClose?: () => void;
};

const MatterhornPopup: FunctionComponent<MatterhornPopupType> = ({
  onClose,
}) => {
  return (
    <div className={styles.matterhornPopupDiv}>
      <iframe
        className={styles.videoIframe}
        src={`https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
        title="Matterhorn"
      />
    </div>
  );
};

export default MatterhornPopup;
