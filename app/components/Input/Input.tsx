import { ComponentProps } from "react";
import styles from "./input.module.scss";
import { Typography } from "../Typography/Typography";

interface InputProps extends ComponentProps<"input"> {
  title?: string;
}

export function Input(props: InputProps) {
  const { title, ...rest } = props;
  return (
    <div className={styles.input__container}>
      <Typography weight="regular">{title}</Typography>
      <input type="text" className={styles.input__control} {...rest} />
    </div>
  );
}
