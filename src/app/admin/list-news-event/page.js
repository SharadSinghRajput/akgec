import SideBar from "../Components/SideBar";
import ListNewsEvent from "./ListNewsEvent";

export default function Home() {
  return (
    <>
      <div className="flex gap-10 bg-gray-100">
        <SideBar />
        <div className="pt-16 overflow-x-auto w-full h-screen">
          <ListNewsEvent />
        </div>
      </div>
    </>
  );
}
