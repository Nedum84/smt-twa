import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { BtnProps } from "./types";
import PrimaryButton from "./PrimaryButton";

const OutlinedButton = forwardRef<HTMLButtonElement, BtnProps>((props, ref) => {
  return (
    <PrimaryButton
      ref={ref}
      {...props}
      className={twMerge(
        "flex items-center justify-center bg-transparent",
        "border border-primary py-2.5 px-4 hover:bg-primary/5",
        "rounded-sm text-primary disabled:opacity-40 outline-none",
        props.className
      )}
    />
  );
});

OutlinedButton.displayName = "OutlinedButton";

export default OutlinedButton;
