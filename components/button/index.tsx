import styles from "./Button.module.scss";
import cn from "clsx";
import { IButtonProps } from "./Button.props";

export const Button = ({
  children,
  className,
  ariaLabel,
  onClick,
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.root, className)}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
