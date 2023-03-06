import styles from "./Button.module.scss";
import cn from "clsx";
import { IButtonProps } from "./Button.props";

export const Button = ({ children, className }: IButtonProps): JSX.Element => {
  return <button className={cn(styles.root, className)}>{children}</button>;
};
