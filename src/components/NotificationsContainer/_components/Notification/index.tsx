import styles from "./Notification.module.scss";
import classnames from "classnames";
import { useState } from "react";
import { 
  SvgChevronUp, 
  SvgChevronDown,
  SvgCrossIcon
} from "../../../../assets/SvgIcons";

interface NotificationProps {
  notification: {
    id: number;
    title: string;
    description: string;
    details?: string | boolean;
  };
}

const Notification = ({ notification }: NotificationProps) => {
  const { id, title, description, details } = notification;

  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [isClosed, setClosed] = useState(false);

  const handleOpenDetails = () => {
    setDetailsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setClosed((prev) => !prev);
  };

  return (
    <div
      className={classnames(styles.notification, {
        [styles.close]: isClosed,
      })}
    >
      <div className={styles.notification__inner}>
        <div className={styles.redo_logo}></div>
        <div className={styles.notification__inner__container}>
          <h1>{title}</h1>
          <p>{description}</p>
          {details && (
            <>
              <div className={styles.details} onClick={handleOpenDetails}>
                <p>Подробнее</p>

                {isDetailsOpen ? (
                  <SvgChevronUp className={styles.svg_charon} />
                ) : (
                  <SvgChevronDown className={styles.svg_charon} />
                )}
              </div>
              {isDetailsOpen && (
                <div className={styles.detailsText}>{details}</div>
              )}
            </>
          )}
        </div>
      </div>
      <SvgCrossIcon className={styles.cross} onClick={handleClose} />
    </div>
  );
};

export default Notification;
