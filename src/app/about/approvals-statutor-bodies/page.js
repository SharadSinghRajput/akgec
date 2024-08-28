import ApprovalsStatutoryBodies from './ApprovalsStatutoryBodies';
import Header from '../../Components/Header';
import { AboutSideBar } from '../../Components/AboutSideBar';
import Breadcrumb from '../../Components/Breadcrumb';

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
    name: "Approvals by Statutory Bodies",
    Link: "about",
  }
]
export default function Home() {
  return (
    <>
      <Header title={"Approvals by Statutory Bodies"} />
      <div className="max-w-[1400px] w-full mx-auto pt-16 p-5">
        <Breadcrumb data={BreadCrumb} />
        <div className="flex flex-col lg:flex-row flex-1 gap-5 mt-5">
          <div className="flex-1">
            <ApprovalsStatutoryBodies />
          </div>
          <div className="sm:w-1/4">
            <AboutSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
