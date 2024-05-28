import styles from "./Notification.module.scss";
import classnames from "classnames";
import { useState } from "react";
import {
  SvgArrowRight,
  SvgChevronUp,
  SvgChevronDown,
  SvgCrossIcon,
  SvgSave,
  SvgDelete,
} from "../../../../../../../assets/SvgIcons";

interface NotificationProps {
  notification: {
    id: number;
    title: string;
    description: string;
    details?: string | boolean;
  };
  close?: boolean | undefined;
  onClose: () => void;
}

const Notification = ({ notification, close, onClose }: NotificationProps) => {
  const { id, title, description, details } = notification;

  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [isClosed, setClosed] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const handleOpenDetails = () => {
    setDetailsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setClosed((prev) => !prev);
    onClose();
  };

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div
      className={classnames(styles.notification, {
        [styles.close]: isClosed || close,
        [styles.click]: isClicked,
      })}
      onClick={handleClick}
    >
      <div className={styles.container}>
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
      {isClicked && (
        <div className={styles.buttonsContainer}>
          <div className={styles.button} onClick={() => {}}>
            <p>Перейти</p>
            <SvgArrowRight className={styles.svg_icon} />
          </div>
          <div className={styles.button} onClick={() => {}}>
            <p>Сохранить</p>
            <SvgSave className={styles.svg_icon} />
          </div>
          <div className={styles.button} onClick={() => {}}>
            <p>Удалить</p>
            <SvgDelete className={styles.svg_icon} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
