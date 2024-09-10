import Header from '../../../Components/Header';
import { AboutSideBar } from '../../../Components/AboutSideBar';
import Breadcrumb from '../../../Components/Breadcrumb';
import { AcademicCalendarEven } from './AcademicCalendarEven';
import { AcademicCalendar } from '@/app/Components/AcademicCalendar';

const ButtoName = {
  name: "Apply Now",
  Link: "",
};
const BreadCrumb = [
  {
    name: "academics",
    Link: "",
  },
  {
    name: "academic-calendar-even",
    Link: "academics",
  }
]

export default function Home() {
  return (
    <>
      <Header title={"AKG University Course Fees 2024"} Butto={ButtoName} />
      <div className="max-w-[1400px] w-full mx-auto pt-16 p-5">
        <Breadcrumb data={BreadCrumb} />
        <div className="flex flex-col sm:flex-row flex-1 gap-10 mt-5">
          <div className="flex-1">
            <AcademicCalendarEven />
          </div>
          <div className="sm:w-1/4">
            <AcademicCalendar />
            <AboutSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
