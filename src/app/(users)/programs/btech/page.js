import Header from "@/Components/Header";
import BtechProgram from "./BtechProgram";

export default function Home() {
  return (
    <>
    <Header title={<span className="leading-[40px]">Bachelor of Technology <br /> (B. Tech)</span>} Button={{ name: "Apply Now", Link: "/" }} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
    <BtechProgram />
    </>
  );
}
