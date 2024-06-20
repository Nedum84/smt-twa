import React, { MouseEvent } from "react";
import { twMerge } from "tailwind-merge";
import PrimaryButton from "./PrimaryButton";
import { HiOutlineRefresh } from "react-icons/hi";

interface Props {
  title?: string;
  loading?: boolean;
  showTitle?: boolean;
  extraClass?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  btnProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}
export default function RefreshPrimary(props: Props) {
  const { title, onClick, showTitle = true, loading } = props;

  return (
    <PrimaryButton
      title={showTitle ? title || "Refresh" : ""}
      className={twMerge(
        "w-fit",
        "text-normal gap-1 border border-gray-300",
        loading && "border-gray-500",
        `bg-gray-100 hover:bg-gray-200 py-[6px] text-sm hover:opacity-70 min-h-[33.5px]`,
        props.extraClass
        // !props.showTitle && loading && "rounded-full"
      )}
      onClick={onClick}
      disabled={loading}
      icon={
        <HiOutlineRefresh className={twMerge("h-5 w-5 text-normal", loading && "animate-spin")} />
      }
      type="button"
      btnProps={{ title: "Click to refresh", ...props.btnProps }}
    />
  );
}
