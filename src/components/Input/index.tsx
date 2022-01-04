import { ReactElement, CSSProperties } from "react";
import styles from "./styles.module.scss";
import cx from "classnames";

function Onboarding({
  label,
  setValue,
  type,
  value,
  name,
  style,
  className,
}: {
  label?: string;
  name?: string;
  type?: string;
  value: string;
  className?: string;
  style?: CSSProperties;
  setValue: (value: string) => void;
}): ReactElement {
  return (
    <div style={style} className={cx(className, styles.input)}>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default Onboarding;
