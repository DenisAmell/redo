import { Notification } from "./_components";
import styles from "./NotificationContainer.module.scss";

type Notification = {
  id: number;
  title: string;
  description: string;
  details?: string | boolean;
};

interface NotificationsProps {
  notifications: Notification[];
}

const NotificationsContainer = ({ notifications }: NotificationsProps) => {
  return (
    <div className={styles.notificationContainer}>
      {notifications.map((notification) => (
        <Notification notification={notification} key={notification.id} />
      ))}
    </div>
  );
};

export default NotificationsContainer;
