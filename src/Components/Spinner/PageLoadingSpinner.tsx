import { twMerge } from "tailwind-merge";
import Spinner from ".";

type Props = {
  extraClass?: string;
};
function PageLoadingSpinner(props: Props) {
  const { extraClass = "" } = props;

  return (
    <div className={twMerge(`p-4 flex items-center justify-center`, extraClass)}>
      <Spinner extraClass="h-10 w-10 fill-primary text-gray-200" />
    </div>
  );
}

export default PageLoadingSpinner;
