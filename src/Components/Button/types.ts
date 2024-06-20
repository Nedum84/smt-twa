/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";

export type BtnProps<T = ComponentPropsWithoutRef<"button">> = {
  title: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  url?: string;
  className?: string;
  fullWidth?: boolean;
  icon?: any;
  type?: "button" | "submit";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  btnProps?: T;
};
