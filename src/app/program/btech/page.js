import BtechProgram from './BtechProgram';
import ProgramHeader from '../../Components/ProgramHeader';
import { AboutSideBar } from '../../Components/AboutSideBar';
import Breadcrumb from '../../Components/Breadcrumb';

const ButtonName = {
  name: "Apply Now",
  Link: "",
};
const BreadCrumb = [
  {
    name: "about",
    Link: "",
  },
  {
    name: "B.tech",
    Link: "about",
  }
]

export default function Home() {
  return (
    <>
     
      <ProgramHeader title={"B.tech"} fullform={"(Bachelor of Technology)"} department={"Department of Computer Science and Engineering"} Button={ButtonName} />
      <div className="max-w-[1400px] w-full mx-auto pt-16 p-5">
        <Breadcrumb data={BreadCrumb} />
        <div className="flex flex-col sm:flex-row flex-1 gap-10 mt-5">
          <div className="flex-1">
            <BtechProgram />
          </div>
          {/* <div className="sm:w-1/4">
            <AboutSideBar />
          </div> */}
        </div>
      </div>
    </>
  );
}
