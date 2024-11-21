import SideBar from "../Components/SideBar";
import CreateNewsEvent from "./CreateNewsEvent";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-100">
        <SideBar />
        <div className="pt-16 overflow-x-auto w-full h-screen px-10">
          <CreateNewsEvent />
        </div>
      </div>
    </>
  );
}
