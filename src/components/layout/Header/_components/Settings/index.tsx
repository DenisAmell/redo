import Modal from "react-modal";
import { SystemSettingsFolder, ThemeFolder, WidgetsSettingsFolder } from "./_components";
import styles from "./Settings.module.scss";
import "./Settings.scss";
import classnames from "classnames";
import { useState } from "react";
import {
  ThemeContext
} from "../../../../../context/ThemeContext";
import { SvgCrossIcon, SvgDocsSettings, SvgProfileSettings, SvgSystemSettings } from "../../../../../assets/SvgIcons";

interface SettingsProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const Settings = ({ isOpen, onRequestClose }: SettingsProps) => {
  const [openedTab, setOpenedTab] = useState("system");

  const handleOpenedTab = (value: string) => {
    setOpenedTab(value);
  };

  const systemSettings = [
    {
      title: "Подтверждение удаления",
      toggle: false,
      values: [
        { id: 0, value: "Без подтверждения" },
        { id: 1, value: "Одинарное подвтерждение" },
        { id: 2, value: "Двойное подвтерждение" },
      ],
    },
    {
      title: "Виджеты",
      toggle: true,
      values: [
        { id: 0, value: "Сотрудники в подчинении" },
        { id: 1, value: "Бригады" },
        { id: 2, value: "Автомобили" },
        { id: 3, value: "Работы на карте" },
      ],
    },
  ];

  return (
    <Modal
      closeTimeoutMS={100}
      isOpen={isOpen}
      className={classnames("Settings__Content")}
      overlayClassName="BaseModal__Overlay"
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      <div className="Settings__Content__Container">
        <SvgCrossIcon
          className="Settings__Content__Close"
          onClick={onRequestClose}
        />
        <div className="Settings__Content__TitleContainer">
          <h2 className="Settings__Content__Title">Настройки</h2>
          <div className="Settings__Content__Tabs">
            <div
              className={classnames("Settings__Content__Tab", {
                ["Settings__Content__Tab__isOpened"]: openedTab === "system",
              })}
              onClick={() => handleOpenedTab("system")}
            >
              <SvgSystemSettings className="Settings__Content__Img" />
              <h2>Системные</h2>
            </div>
            <div
              className={classnames("Settings__Content__Tab", {
                ["Settings__Content__Tab__isOpened"]: openedTab === "user",
              })}
              onClick={() => handleOpenedTab("user")}
            >
              <SvgProfileSettings className="Settings__Content__Img" />
              <h2>Пользовательские</h2>
            </div>
            <div
              className={classnames("Settings__Content__Tab", {
                ["Settings__Content__Tab__isOpened"]: openedTab === "docs",
              })}
              onClick={() => handleOpenedTab("docs")}
            >
              <SvgDocsSettings className="Settings__Content__Img" />
              <h2>Документы</h2>
            </div>
          </div>
        </div>

        <div className="Settings__Content__Inner">
          {openedTab === "system" && (
            <>
              <ThemeContext.Consumer>
                {({ setTheme }) => <ThemeFolder setTheme={setTheme} />}
              </ThemeContext.Consumer>
              <SystemSettingsFolder
                title={systemSettings[0].title}
                toggle={systemSettings[0].toggle}
                values={systemSettings[0].values}
              />
              <WidgetsSettingsFolder
                title={systemSettings[1].title}
                values={systemSettings[1].values}
              />
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Settings;
