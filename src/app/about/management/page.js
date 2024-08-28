import Management from './Management';
import Header from '../../Components/Header';
import { AboutSideBar } from '../../Components/AboutSideBar';

const ButtoName = {
  name: "Apply Now",
  Link: "",
};

export default function Home() {
  return (
    <>
      <Header title={"Management"} Butto={ButtoName} />
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col sm:flex-row flex-1">
          <div className="flex-1 p-4">
            <Management />
          </div>
          <div className="sm:w-1/4 p-4">
            <AboutSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
