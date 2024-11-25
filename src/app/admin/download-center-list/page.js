import SideBar from "../Components/SideBar";
import DownloadCenter from "./DownloadCenter";
import CirculerList from "./DownloadCenter";

export default function Home() {
  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="pt-10 px-10 overflow-x-auto w-full h-screen">
        <DownloadCenter />
      </div>
    </div>
  );
}
