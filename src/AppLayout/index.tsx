import { Outlet } from "react-router-dom";
import BottomTabs from "./BottomTabs";

export default function AppLayout() {
  return (
    <div className="w-screen h-dvh">
      <div className="h-screen flex flex-col max-w-[800px] mx-0">
        <div className="flex-1 w-full">
          <Outlet />
        </div>
        <BottomTabs />
      </div>
    </div>
  );
}
