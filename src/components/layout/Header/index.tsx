import { useState } from "react";
import { Toggle } from "../../base";
import { NotificationsWindow, Menu, HelpModal, Settings } from "./_components";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import classnames from "classnames";
import {
  SvgSearch,
  SvgNotification,
  SvgService,
} from "../../../assets/SvgIcons";

interface HeaderProps {
  notificationsCounter?: number | undefined;
}

const Header = ({ notificationsCounter }: HeaderProps) => {
  const navigate = useNavigate();
  const [isSearchClicked, setSearchClicked] = useState(false);
  const [isNotificationClicked, setNotificationClicked] = useState(false);
  const [isMenuClicked, setMenuClicked] = useState(false);

  const [isHelpClicked, setHelpClicked] = useState(false);
  const [isSettingsClicked, setSettingsClicked] = useState(false);
  const [isExitClicked, setExitClicked] = useState(false);

  const handleSearch = () => {
    setSearchClicked((prev) => !prev);
  };

  const handleNotification = () => {
    setNotificationClicked((prev) => !prev);
  };

  const handleMenu = () => {
    setMenuClicked((prev) => !prev);
  };

  const handleHelp = () => {
    setHelpClicked((prev) => !prev);
  };
  const handleSettings = () => {
    setSettingsClicked((prev) => !prev);
  };
  const handleExit = () => {
    setExitClicked((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div onClick={() => navigate("/main")} className={styles.logo}>
          <div className={styles.mgtsLogo}></div>

          <div className={styles.redo_logo}></div>

          <div className={styles.nameDiv}>
            <p className={styles.name}>R</p>
            <p className={styles.name}>e</p>
            <p className={styles.name}>:</p>
            <p className={styles.name}>D</p>
            <p className={styles.name}>o</p>
          </div>
          <div
            className={classnames(styles.service, {
              [styles.service__searchMobile]: isSearchClicked,
            })}
          >
            <SvgSearch className={styles.svg_search_mobile} />
            <input type="text" />
            {isSearchClicked && <Toggle isChecked={true} onClick={() => {}} />}
          </div>
        </div>

        <div className={styles.menu}>
          <Link to="/incident" className={styles.link}>
            <a className={styles.link}>Инциденты</a>
          </Link>
          <a className={styles.link}>Работы</a>
          <a className={styles.link}>Площадки</a>
        </div>

        <div className={styles.search}>
          <SvgSearch className={styles.svg_search} />
          <input type="text" />
          <Toggle isChecked={true} onClick={() => {}} />
        </div>

        <div className={styles.lk} onClick={handleMenu}>
          <img src="assets/icons/defAvatar.png" alt="avatar" />
          <a className={styles.link}>Иванов И.И.</a>
          {isMenuClicked && (
            <Menu
              handleHelp={handleHelp}
              handleSettings={handleSettings}
              handleExit={handleExit}
            />
          )}
        </div>

        <div className={styles.services}>
          <img
            className={classnames(styles.avatar, {
              [styles.services__hidden]: isSearchClicked,
            })}
            onClick={handleMenu}
            src="assets/icons/defAvatar.svg"
            alt="avatar"
          />
          <div className={styles.notificationCounter}>
            <SvgNotification
              className={classnames(styles.service, {
                [styles.services__hidden]: isSearchClicked,
              })}
              onClick={handleNotification}
            />

            {notificationsCounter && notificationsCounter > 0 ? (
              <div className={styles.counter}>{notificationsCounter}</div>
            ) : (
              <div></div>
            )}
          </div>

          <div className={styles.allProducts}>
            <SvgService className={styles.svg_all_products} />
          </div>
        </div>
      </div>

      {isNotificationClicked && <NotificationsWindow />}
      {isHelpClicked && (
        <HelpModal isOpen={isHelpClicked} onRequestClose={handleHelp} />
      )}
      {isSettingsClicked && (
        <Settings isOpen={isSettingsClicked} onRequestClose={handleSettings} />
      )}
    </div>
  );
};

export default Header;
