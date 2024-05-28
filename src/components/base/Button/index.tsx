import styles from "./Button.module.scss";
import classnames from "classnames";

interface ButtonProps {
  rounded?: boolean | undefined;
  menuButton?: boolean | undefined;
  iconSrcBefore?: string;
  iconSrcAfter?: string;
  onClick: () => void;
  children: string;
}

const Button = ({
  rounded,
  menuButton,
  iconSrcBefore,
  iconSrcAfter,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <div
      className={classnames(styles.button, {
        [styles.button__rounded]: rounded,
        [styles.button__menuButton]: menuButton,
      })}
      onClick={onClick}
    >
      {iconSrcBefore && <img src={iconSrcBefore} />}
      <p>{children}</p>
      {iconSrcAfter && <img src={iconSrcAfter} />}
    </div>
  );
};
export default Button;
