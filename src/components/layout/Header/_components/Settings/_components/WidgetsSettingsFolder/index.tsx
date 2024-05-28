import { useEffect, useState } from "react";
import styles from "./WidgetsSettingsFolder.module.scss";
import classnames from "classnames";
import { Toggle } from "../../../../../../base";

interface WidgetsSettingsFolderProps {
  title: string;
  values: {
    id: number;
    value: string;
  }[];
}

const WidgetsSettingsFolder = ({
  title,
  values,
}: WidgetsSettingsFolderProps) => {
  const storedWidgets = localStorage.getItem("widgets");


  const initialWidgets = storedWidgets ? JSON.parse(storedWidgets) : [];

  const [isSelected, setIsSelected] = useState<string[]>(initialWidgets);

  const handleselect = (value: string) => {
    setIsSelected((prev) => {
      if (prev.includes(value)) {
        localStorage.setItem(
          "widgets",
          JSON.stringify(prev.filter((item) => item !== value))
        );
        return prev.filter((item) => item !== value);
      } else {
        localStorage.setItem("widgets", JSON.stringify([...prev, value]));
        return [...prev, value];
      }
    });
  };

  return (
    <div className={styles.Folder}>
      <div className={styles.Folder__Title}>{title}</div>
      <div className={styles.Folder__Content}>
        <div className={styles.Folder__Content__Switcher}>
          {values.map((value) => (
            <div
              key={value.id}
              className={classnames(styles.Folder__Content__Switcher__Item, {
                [styles.Folder__Content__Switcher__Item__isToggle]: true,
              })}
            >
              <p>{value.value}</p>
              <Toggle
                isChecked={isSelected.includes(value.value)}
                onClick={() => handleselect(value.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetsSettingsFolder;
