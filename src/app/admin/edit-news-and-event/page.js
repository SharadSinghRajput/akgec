import { Suspense } from "react";
import SideBar from "../Components/SideBar";
import EditNewsAndEvent from "./EditNewsAndEvent";

export default function Home() {
  return (
    <>
      <div className="flex gap-10 bg-gray-100">
        <SideBar />
        <div className="pt-16 overflow-x-auto w-full h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <EditNewsAndEvent />
          </Suspense>
        </div>
      </div>
    </>
  );
}
