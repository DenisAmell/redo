import { useState } from "react";
import { SvgChevronUp, SvgChevronDown } from "../../assets/SvgIcons";
import styles from "./MobilePersonWidget.module.scss";
import classnames from "classnames";

interface MobilePersonWidgetProps {
  brigade: { id: number; fio: string }[];
}
const MobilePersonWidget = ({ brigade }: MobilePersonWidgetProps) => {
  const [isBrigadeClicked, setBrigadeClicked] = useState(false);

  const handleBrigade = () => {
    setBrigadeClicked((prev) => !prev);
  };
  return (
    <div className={styles.brigade}>
      <div
        className={classnames(styles.brigade_title, {
          [styles.brigade_title_listShow]: isBrigadeClicked,
        })}
        onClick={handleBrigade}
      >
        <h1>Ваша бригада </h1>
        {isBrigadeClicked ? (
          <SvgChevronUp className={styles.svg_cheron} />
        ) : (
          <SvgChevronDown className={styles.svg_cheron} />
        )}
      </div>
      <div
        className={classnames(styles.brigade_list, {
          [styles.brigade_listShow]: isBrigadeClicked,
        })}
      >
        {brigade.map((person) => (
          <p key={person.id}>{person.fio}</p>
        ))}
      </div>
    </div>
  );
};

export default MobilePersonWidget;
