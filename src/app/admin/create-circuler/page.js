import SideBar from "../Components/SideBar";
import CreateCirculer from "./CreateCirculer";

export default function Home() {
  return (
    <>
      <div className="flex gap-10 bg-gray-100">
        <SideBar />
        <div className="pt-16 overflow-x-auto w-full h-screen">
          <CreateCirculer />
        </div>
      </div>
    </>
  );
}
