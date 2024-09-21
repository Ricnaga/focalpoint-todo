import { ComponentProps } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "tertiary";
}

export function Button(props: ButtonProps) {
  const { variant = "primary", ...rest } = props;

  const buttonStyles = {
    variant: "--variant-".concat(variant),
  };

  const buttonClassname = styles.button.concat(" ",
    Object.values(buttonStyles)
      .map((className) => styles["button".concat(className)])
      .join(",")
      .replaceAll(",", " ")
  );

  return <button className={buttonClassname} {...rest} />;
}
