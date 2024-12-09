import Header from '@/Components/Header';
import Admissions from './Admissions';

const Button = {
  name: "Apply Now",
  Link: "",
};


export default function Home() {
  return (
    <>
      <Header bg={"/image/building/building2.webp"} Button={Button} position='center' title={<span className="text-4xl md:text-5xl lg:text-6xl pt-20">Experience First<br />Then Excel</span>} subHeading={<>Empowering Futures & Realizing Dreams through <strong>Exclusive Scholarships at AKGU University</strong></>} gradient={"bg-gradient-to-r from-black to-black/20"} />
      <Admissions />
    </>
  );
}
