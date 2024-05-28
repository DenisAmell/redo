import React from "react";

import { motion } from "framer-motion";

import styles from "./Widget.module.scss";
import { Button } from "../index";
import { IWidget } from "../../pages/MainPage";

interface WidgetItemProps {
  widget: IWidget;
}

const Widget: React.FC<WidgetItemProps> = ({ widget }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className={styles.widget}>
        <div className={styles.title}>{widget.title}</div>
        <div className={styles.inner}>
          {widget.inner.map((item) => (
            <div key={item.id} className={styles.inner_line}>
              {item.value.map((str) => (
                <div
                  key={item.value.indexOf(str)}
                  className={styles.inner_line_item}
                >
                  {str}
                </div>
              ))}
            </div>
          ))}
        </div>

        <Button onClick={() => {}}>Подробнее</Button>
      </div>
    </motion.div>
  );
};

export default Widget;
