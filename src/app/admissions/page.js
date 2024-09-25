
import Header from '../../Components/Header';
import Admissions from './Admissions';

const Button = {
  name: "Apply Now",
  Link: "",
};


export default function Home() {
  return (
    <>
      <Header bg={"/image/admission/admission-bg.jpg"} Button={Button} title={<span className="text-4xl md:text-5xl lg:text-6xl pt-20">Experience First<br />Then Excel</span>} subHeading={<>Empowering Futures & Realizing Dreams through <strong>Exclusive Scholarships at AKGEC University</strong></>} gradient={"bg-gradient-to-r from-black/50 to-black/20"} />
      <Admissions />
    </>
  );
}
