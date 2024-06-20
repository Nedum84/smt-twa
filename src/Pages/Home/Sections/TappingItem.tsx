import { twMerge } from "tailwind-merge";

type Props = {
  onClick: () => void;
};
export default function TappingItem(props: Props) {
  return (
    <button
      onClick={() => props.onClick()}
      className={twMerge(
        "w-96 h-96 rounded-full custom-shadow-md",
        "flex items-center justify-center"
      )}
    >
      Tap Here
    </button>
  );
}
