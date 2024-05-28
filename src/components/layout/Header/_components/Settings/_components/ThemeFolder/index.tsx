import { useEffect, useState } from "react";
import styles from "./ThemeFolder.module.scss";
import classnames from "classnames";
import { themes } from "../../../../../../../context/ThemeContext";
import { dark } from "@mui/material/styles/createPalette";

interface ThemeFolderProps {
  setTheme: React.Dispatch<React.SetStateAction<themes>>;
}

const ThemeFolder: React.FC<ThemeFolderProps> = ({ setTheme }) => {


  const [isSelected, setIsSelected] = useState(
    localStorage.getItem("theme")?.split("-") || ['s', 's']
  );

  useEffect(() => {
    if (
      (isSelected[0] === "light" || isSelected[0] === "auto") &&
      isSelected[1] === "MGTS"
    ) {
      setTheme(themes.lightMgts);
      setIsSelected(["light", "MGTS"]);
    } else if (isSelected[0] === "light") {
      setTheme(themes.lightMts);
      setIsSelected(["light", "MTS"]);
    } else if (isSelected[0] === "dark" && isSelected[1] !== "MTS") {
      setTheme(themes.darkMgts);
      setIsSelected(["dark", "MGTS"]);
    } else {
      setTheme(themes.darkMts);
      setIsSelected(["dark", "MTS"]);
    }
  });

  const handleSelectTheme = (value: string) => {
    setIsSelected((prev) => [value, prev[1]]);

    // localStorage.setItem("theme", value);
  };

  const handleSelectStyle = (value: string) => {
    setIsSelected((prev) => [prev[0], value]);
    // localStorage.setItem("style", value);
  };

  //   <ThemeContext.Consumer>
  //   {({ theme, setTheme }) => (
  //     <Toggle
  //       onChange={() => {
  //         if (theme === themes.light) setTheme(themes.dark);
  //         if (theme === themes.dark) setTheme(themes.light);
  //       }}
  //       value={theme === themes.dark}
  //     />
  //   )}
  // </ThemeContext.Consumer>

  return (
    <div className={styles.Folder}>
      <div className={styles.Folder__Title}>Цветовая схема</div>

      <div className={styles.Folder__Content}>
        <h3>Тема</h3>
        <div className={styles.Folder__Content__Switcher}>
          <div
            className={classnames(styles.Folder__Content__Switcher__Item, {
              [styles.Folder__Content__Switcher__Item__isSelected]:
                isSelected[0] === "auto",
            })}
            onClick={() => handleSelectTheme("auto")}
          >
            <p>Авто</p>
          </div>

          <div
            className={classnames(styles.Folder__Content__Switcher__Item, {
              [styles.Folder__Content__Switcher__Item__isSelected]:
                isSelected[0] === "light",
            })}
            onClick={() => {
              handleSelectTheme("light");
            }}
          >
            <p>Светлая</p>
          </div>
          <div
            className={classnames(styles.Folder__Content__Switcher__Item, {
              [styles.Folder__Content__Switcher__Item__isSelected]:
                isSelected[0] === "dark",
            })}
            onClick={() => {
              handleSelectTheme("dark");
            }}
          >
            <p>Темная</p>
          </div>
        </div>
        <h3>Стиль</h3>
        <div className={styles.Folder__Content__Switcher}>
          <div
            className={classnames(styles.Folder__Content__Switcher__Item, {
              [styles.Folder__Content__Switcher__Item__isSelected]:
                isSelected[1] === "MTS",
            })}
            onClick={() => handleSelectStyle("MTS")}
          >
            <p>МТС</p>
          </div>
          <div
            className={classnames(styles.Folder__Content__Switcher__Item, {
              [styles.Folder__Content__Switcher__Item__isSelected]:
                isSelected[1] === "MGTS",
            })}
            onClick={() => handleSelectStyle("MGTS")}
          >
            <p>МГТС</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeFolder;
