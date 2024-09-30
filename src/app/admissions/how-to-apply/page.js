import Header from '@/Components/Header';
import SideBar from '@/Components/SideBar';
import Breadcrumb from '@/Components/Breadcrumb';
import { HowToApply } from './HowToApply';

const ButtoName = {
  name: "Apply Now",
  Link: "",
};
const BreadCrumb = [
  {
    name: "about",
    Link: "",
  },
  {
    name: "Hostel",
    Link: "about",
  }
]


const SideBarLink = [
  {name: "Our Identity" , link : "/overview"},
  {name: "Leadership" , link : ""},
  {name: "Leadership" , link : ""},
  {name: "Governance" , link : ""},
  {name: "Recognition and Approvals" , link : ""},
  {name: "Awards and Rankings" , link : ""},
  {name: "Institution Social Responsibility" , link : ""}
]

export default function Home() {
  return (
    <>
      <Header title={"How To Apply"} gradient={"bg-gradient-to-r from-gray-900 to-transparent"} />
      <div className="max-w-[1400px] w-full mx-auto pt-16 p-5">
        <Breadcrumb data={BreadCrumb} />
        <div className="flex flex-col lg:flex-row flex-1 gap-5 mt-5">
          <div className="flex-1">
            <HowToApply />
          </div>
          <div className="sm:w-1/4 ">
              <SideBar title={"About Us"} LinkList={SideBarLink} />            
          </div>
        </div>
      </div>
    </>
  );
}
