import Header from "@/Components/Header";
import Infrastructure from "./Infrastructure";
import SideBar from "@/Components/SideBar";

const SideBarLink = [
  { name: "Our Identity", link: "/overview" },
  { name: "Leadership", link: "" },
  { name: "Leadership", link: "" },
  { name: "Governance", link: "" },
  { name: "Recognition and Approvals", link: "" },
  { name: "Awards and Rankings", link: "" },
  { name: "Institution Social Responsibility", link: "" }
]


export default function AboutPlacement() {
  return (
    <>
      <div className="bg-[#f2f6ff]">
        <Header title={"AKGEC University Infrastructures"} bg="/image/Building2.jpg" Button={{ name: "Apply Now", Link: "/" }} gradient={"bg-gradient-to-r from-zinc-900 to-gray-900/40"} />
        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 gap-8 px-4 max-sm:px-2">
          <div className="col-span-9 max-md:col-span-12 ">
            <Infrastructure />
          </div>
          <div className="col-span-3 max-md:col-span-12">
            <SideBar title={"About Us"} LinkList={SideBarLink} />
          </div>
        </section>
      </div>
    </>
  );
}
