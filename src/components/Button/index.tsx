import { CSSProperties, ReactElement } from "react";
import styles from "./styles.module.scss";
import cx from "classnames";

function Button({
  title,
  className,
  onClick,
  style,
  disabled,
}: {
  title: string;
  className?: string;
  onClick?: (event?: any) => void;
  style?: CSSProperties;
  disabled?: boolean;
}): ReactElement {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={cx(styles.button, disabled && styles.disabled, className)}
    >
      <span>{title}</span>
    </button>
  );
}

export default Button;
