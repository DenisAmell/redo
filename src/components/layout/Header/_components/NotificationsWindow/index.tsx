import { Button } from "../../../../index";
import { Notification } from "./_components";
import { useState } from "react";
import styles from "./NotificationsWindow.module.scss";
import classnames from "classnames";

const NotificationsWindow = () => {
  const [isAllClosed, setAllClosed] = useState(false);

  const notifications = [
    {
      id: 0,
      title: "Заголовок уведомления",
      description:
        "Описание уведомления Описание уведомления Описание уведомления Описание уведомления",
      details:
        "Тут будет какое-то подробное описание уведомления с какой-то информацией о чем-то Тут будет какое-то подробное описание уведомления с какой-то информацией о чем-то Тут будет какое-то подробное описание уведомление с какой-то информацией о чем-то",
    },
    {
      id: 1,
      title: "Необходимо проверить данную станцию",
      description:
        "На станции нужно что-то сделать, подробности можно увидеть в таблице",
    },
    {
      id: 2,
      title: "Автомобиль 12315, ТСО",
      description:
        "Автомобилю необходимо провести ТСО или еще что-то, тут будет написано все",
    },
    {
      id: 3,
      title: "Сотрудник Иванов И.И. просрочил обучение",
      description:
        "Сотруднику Иванову И.И. с табельным номером 3264468 необходимо пройти такое-то обучение",
      details:
        "Данное обучение можно найти в сервисе корпоративного университета. Обратите Внимание, что в случае, если сотрудник не пройдет обучение до 23.09, будет то-то",
    },
    {
      id: 4,
      title: "Сотрудник Иванов И.И. просрочил обучение",
      description:
        "Сотруднику Иванову И.И. с табельным номером 3264468 необходимо пройти такое-то обучение",
      details:
        "Данное обучение можно найти в сервисе корпоративного университета. Обратите Внимание, что в случае, если сотрудник не пройдет обучение до 23.09, будет то-то",
    },
  ];

  const [notificationCount, setNotificationCount] = useState(
    notifications.length
  );

  const handleCloseAll = () => {
    setAllClosed((prev) => !prev);
  };

  const onCloseNotification = () => {
    if (notificationCount === 1) {
      handleCloseAll();
    }
    setNotificationCount((prev) => --prev);
  };

  return (
    <div
      className={classnames(styles.window, {
        [styles.window__closed]: isAllClosed,
      })}
    >
      {notifications.map((notification) => (
        <Notification
          close={isAllClosed}
          notification={notification}
          onClose={onCloseNotification}
          key={notification.id}
        />
      ))}
      <Button onClick={handleCloseAll} rounded>
        Очистить всё
      </Button>
    </div>
  );
};

export default NotificationsWindow;
