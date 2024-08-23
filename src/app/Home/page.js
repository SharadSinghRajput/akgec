import Image from 'next/image';
import Building from '/public/image/Building.jpg'
import Form from './Form'
import ScreenOne from './Screen1'
import ScreenTwo from './Screen2'
import ScreenThree from './Screen3'
import NewsEvents from './NewsEvents'
import CampusSlider from './CampusSlider'
import {Star} from './SVG'
import { TopCard } from './TopCard';

export default function Home() {
  return (
    <>
    <div className='min-h-screen overflow-hidden relative'>
      <div className='flex justify-center relative z-20 min-h-screen'>
        <div className='grid grid-cols-2 max-lg:grid-cols-1'>
          <div className='flex justify-center flex-col pl-20 max-lg:mt-52 max-lg:items-center max-lg:px-5'>
            <h1 className='text-[60px] font-extralight text-white max-lg:text-4xl max-lg:text-center'>AKG UNIVERSITY</h1>
            <p className='text-white text-2xl font-extralight max-lg:text-base max-lg:text-center'>The only engineering college in Uttar Pradesh (AKTU)
            Accredited by NAAC with an A++ grade</p>
            <button className='py-3 px-7 mt-5 rounded-md font-semibold uppercase bg-yellow-500 text-gray-800 w-max'>Apply Today</button>
          </div>
          <div className='max-md:mt-10 pt-5'>
            <Form />
          </div>
        </div>
      </div>
      <div className='w-full h-full object-cover absolute left-0 top-0 z-10 bg-gradient-to-r from-black/60 to-white/0 '></div>
      <Image src={Building} className='w-full h-full object-cover absolute left-0 top-0 z-0' />
    </div>
    <div>
      <ScreenOne />
      <TopCard />
      <ScreenTwo />
      <ScreenThree />
      <CampusSlider />
      <NewsEvents />
    </div>
    </> 
  );
}
