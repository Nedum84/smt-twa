/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentPropsWithoutRef, Fragment, Ref, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { BtnProps } from "./types";
import Spinner from "Components/Spinner";
import { Link } from "react-router-dom";

const PrimaryButton = forwardRef<HTMLButtonElement, BtnProps>((props, ref) => {
  const { fullWidth = true } = props;

  const styles = twMerge(
    "flex items-center justify-center gap-1",
    "bg-primary hover:bg-primary-dark py-2.5 px-4",
    "text-[#Fefefe] disabled:opacity-40",
    "rounded-sm  outline-none whitespace-nowrap",
    fullWidth ? "w-full" : "w-fit",
    props.className
  );

  if (props.url) {
    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        to={props.url}
        className={styles}
        onClick={props.onClick as any}
        {...(props.btnProps as BtnProps<ComponentPropsWithoutRef<"a">> as any)}
      >
        <ButtonContent {...props} />
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      onClick={props.onClick}
      className={styles}
      type={props.type ?? "submit"}
      disabled={props.loading || props.disabled}
      {...props.btnProps}
    >
      <ButtonContent {...props} />
    </button>
  );
});

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;

function ButtonContent(props: BtnProps) {
  return (
    <Fragment>
      {props.loading && <Spinner extraClass="h-5 w-5" />}
      {props.icon}
      {props.title}
    </Fragment>
  );
}
