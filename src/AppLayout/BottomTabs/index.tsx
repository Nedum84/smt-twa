import { useCurrentPath } from "Hooks/useCurrentPath";
import ROUTES from "Routes";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function BottomTabs() {
  const { pathname } = useCurrentPath();

  console.log(pathname);

  return (
    <div className="w-full flex border-t border-gray-200 bg-gray-100">
      <TabItem url={ROUTES.home.path} text="Home" isCurrent={pathname === ROUTES.home.path} />
      <TabItem
        url={ROUTES.transfer.path}
        text="Transfer"
        isCurrent={pathname === ROUTES.transfer.path}
      />
    </div>
  );
}

function TabItem(props: { text: string; isCurrent: boolean; url: string }) {
  return (
    <Link
      className={twMerge(
        "flex-1 text-center py-6 outline-none border-none",
        "rounded-none hover:bg-gray-300/40",
        props.isCurrent && "bg-gray-300/60"
      )}
      to={props.url}
    >
      {props.text}
    </Link>
  );
}
