import { Button } from "../../../../base";
import styles from "./Menu.module.scss";
import classnames from "classnames";

interface MenuProps {
  handleHelp: () => void;
  handleSettings: () => void;
  handleExit: () => void;
}

const Menu = ({ handleHelp, handleSettings, handleExit }: MenuProps) => {
  return (
    <div className={styles.menu}>
      <Button onClick={handleHelp} rounded menuButton>
        Помощь
      </Button>
      <Button onClick={handleSettings} rounded menuButton>
        Настройки
      </Button>
      <Button
        onClick={handleExit}
        iconSrcAfter={"assets/icons/exit.svg"}
        rounded
        menuButton
      >
        Выйти
      </Button>
    </div>
  );
};

export default Menu;
