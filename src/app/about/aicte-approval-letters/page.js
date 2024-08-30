import NbaAccreditation from './NbaAccreditation';
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
    name: "AICTE Approval Letters",
    Link: "about",
  }
]
export default function Home() {
  return (
    <>
      <Header title={"AICTE Approval Letters"} Butto={ButtoName} />
      <div className="max-w-[1400px] w-full mx-auto pt-16 p-5">
        <Breadcrumb data={BreadCrumb} />
        <div className="flex flex-col sm:flex-row flex-1 gap-10 mt-5">
          <div className="flex-1">
            <NbaAccreditation />
          </div>
          <div className="sm:w-1/4">
            <AboutSideBar />
          </div>
        </div>
      </div>
    </>
  );
}