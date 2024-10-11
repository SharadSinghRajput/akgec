import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import CenterOfResearch from "./CenterOfResearch";
import ContactIncubator from "@/Components/ContactIncubator";
import ResearchInfo from "@/Components/ResearchInfo";

// const SideBarLink = [
//   { name: "Our Identity", link: "/overview" },
//   { name: "Leadership", link: "" },
//   { name: "Leadership", link: "" },
//   { name: "Governance", link: "" },
//   { name: "Recognition and Approvals", link: "" },
//   { name: "Awards and Rankings", link: "" },
//   { name: "Institution Social Responsibility", link: "" }
// ]

export default function AboutPlacement() {
  return (
    <>
      <CenterOfResearch />
      <ResearchInfo />
      <ContactIncubator />
    </>
  );
}
