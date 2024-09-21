import { ComponentProps } from "react";
import styles from "./checkbox.module.scss";

type CheckboxProps = ComponentProps<"input">;

export function Checkbox(props: CheckboxProps) {
  return <input type="checkbox" className={styles.checkbox} {...props} />;
}
