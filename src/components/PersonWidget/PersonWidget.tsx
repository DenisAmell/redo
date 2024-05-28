import React, { useState } from "react";
import { Button } from "../index";
import styles from "./PersonWidget.module.scss";
import classnames from "classnames";
import {
  SvgChevronUp,
  SvgChevronDown} from "../../assets/SvgIcons"

interface PersonWidgetProps {
  personData: {
    fio: string;
    login: string;
    tabNumber: string;
    phoneNumber: string;
    email: string;
  };
  brigade?: { id: number; fio: string }[];
}

const PersonWidget = ({ personData, brigade }: PersonWidgetProps) => {
  const { fio, login, tabNumber, phoneNumber, email } = personData;
  const [isBrigadeClicked, setBrigadeClicked] = useState(false);

  const handleBrigade = () => {
    setBrigadeClicked((prev) => !prev);
  };

  return (
    <div className={styles.person}>
      {brigade && (
        <div className={styles.person_brigade}>
          <div className={styles.person_brigade_title} onClick={handleBrigade}>
            <h1>Ваша бригада </h1>

            {isBrigadeClicked ? <SvgChevronUp className={styles.svg_cheron}/> : <SvgChevronDown className={styles.svg_cheron} />}

          </div>
          <div
            className={classnames(styles.person_brigade_list, {
              [styles.person_brigade_listShow]: isBrigadeClicked,
            })}
          >
            {brigade.map((person) => (
              <p key={person.id}>{person.fio}</p>
            ))}
          </div>
        </div>
      )}

      <div className={styles.person_title}>
        <img src="assets/icons/defAvatar.png" />
        <p>{fio}</p>
      </div>

      <div className={styles.info}>Структура подразделения</div>
      <div className={styles.info}>Руководство</div>

      <div className={styles.person_info}>
        <div className={styles.login}>
          <p>Логин</p>
          {login}
        </div>

        <div className={styles.tabel}>
          <p>Табельный номер</p>
          {tabNumber}
        </div>

        <div className={styles.phone}>
          <p>Телефон</p>
          {phoneNumber}
        </div>

        <div className={styles.email}>
          <p>Почта</p>
          {email}
        </div>
      </div>
      <Button iconSrcBefore={"assets/icons/qr.svg"} onClick={() => {}}>
        Мой QR-код
      </Button>
    </div>
  );
};

export default PersonWidget;
