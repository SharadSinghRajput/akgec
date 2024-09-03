
import FooterCard from './Components/FooterCard'
import StudentReviews from './Components/StudentReviews'
import Research from './Components/Research'
import ResearchEnvironment from './Components/ResearchEnvironment'
import MiddleSection from './Components/MiddleSection'
import LogoSlider from './Components/LogoSlider'

import NavBar from './Components/NavBar';
import HomePage from './Home/page';
import Footer from './Components/Footer';


export default function Home() {
  return (
    <>
      <NavBar/>
      <HomePage/>
      <StudentReviews/>
      <Research/>
      <ResearchEnvironment/>
      {/* <MiddleSection/> */}
      <LogoSlider/>
      <FooterCard/>
      <Footer/> 
      {/* <AwardSection/> */}
    </> 
  );
}
