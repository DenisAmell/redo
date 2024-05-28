import { useState } from "react";
import styles from "./SystemSettingsFolder.module.scss";
import classnames from "classnames";
import { Toggle } from "../../../../../../base";

interface SystemSettingsFolderProps {
  title: string;
  toggle?: boolean;
  values: {
    id: number;
    value: string;
  }[];
}

const SystemSettingsFolder = ({
  title,
  toggle,
  values,
}: SystemSettingsFolderProps) => {
  const [isSelected, setIsSelected] = useState(1);

  const handleselect = (value: number) => {
    setIsSelected(value);
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
                [styles.Folder__Content__Switcher__Item__isSelected]:
                  isSelected === value.id && !toggle,
                [styles.Folder__Content__Switcher__Item__isToggle]: toggle,
              })}
              onClick={() => handleselect(value.id)}
            >
              <p>{value.value}</p>
              {toggle && <Toggle isChecked={true} onClick={() => {}}/>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemSettingsFolder;
