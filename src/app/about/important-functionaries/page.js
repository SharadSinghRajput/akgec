import ImportantFunctionaries from './ImportantFunctionaries';
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
    name: "Important Functionaries",
    Link: "",
  }

]


export default function Home() {
  return (
    <>
      <Header title={"Important Functionaries"} />
      <div className="max-w-[1400px] w-full mx-auto pt-16 p-5">
        <Breadcrumb data={BreadCrumb} />
        <div className="flex flex-col lg:flex-row flex-1 gap-5 mt-5">
          <div className="flex-1 ">
            <ImportantFunctionaries />
          </div>
          <div className="sm:w-1/4">
            <AboutSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
