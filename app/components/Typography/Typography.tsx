import { ComponentProps } from "react";
import styles from "./typography.module.scss";

interface TypographyProps extends ComponentProps<"p"> {
  weight?: "regular" | "medium";
  color?: "primary" | "secondary" | "tertiary";
  size?: "medium" | "large";
}

export function Typography(props: TypographyProps) {
  const {
    weight = "medium",
    color = "primary",
    size = "medium",
    ...rest
  } = props;

  const typographyStyles = {
    weight: "--weight-".concat(weight),
    color: "--color-".concat(color),
    size: "--size-".concat(size),
  };

  const typographyClassname = Object.values(typographyStyles)
    .map((className) => styles["typography".concat(className)])
    .join(",")
    .replaceAll(",", " ");
    
  return <p className={typographyClassname} {...rest} />;
}
