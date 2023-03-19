import { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}
