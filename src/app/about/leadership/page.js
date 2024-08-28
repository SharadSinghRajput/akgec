import Directors from './Directors';
import Header from '../../Components/Header';
import { AboutSideBar } from '../../Components/AboutSideBar';

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
    name: "LeaderShip",
    Link: "about",
  }

]

export default function Home() {
  return (
    <>
      <Header title={"Leadership"} />
      <div className="max-w-[1400px] w-full mx-auto pt-16 p-5">
        <ul className='flex justify-start gap-2'>
          <li className='uppercase text-xs'>Home</li>
          {BreadCrumb.map((item, index)=>(
            <li key={index}  className={`before:content-['/'] before:pr-2 uppercase text-xs ${
              index === BreadCrumb.length - 1 ? 'font-semibold' : ''
            }`}>{item.name}</li>
          ))}
        </ul>
        <div className="flex flex-col lg:flex-row flex-1 gap-5 mt-5">
          <div className="flex-1">
            <Directors />
          </div>
          <div className="sm:w-1/4 ">
            <AboutSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
