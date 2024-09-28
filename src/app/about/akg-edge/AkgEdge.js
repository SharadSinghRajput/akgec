import React from 'react'
import "@/app/globals.css";
import { GraduationCap, Briefcase, Globe, DollarSign } from "lucide-react"

const AkgEdge = () => {
  return (
    <>
      <section className='relative bg-Edge bg-cover h-[75vh] w-full text-white'>
        <div className='absolute inset-0 bg-edgeGradient opacity-75'></div>
        <div className='absolute z-20 bottom-10 left-1/2 -translate-x-1/2 w-[72%] max-xl:w-[90%] flex flex-col justify-between min-h-96'>
          <div className='max-w-xl'>
            <h2 className='text-4xl max-lg:text-3xl max-md:text-2xl  font-novaReg leading-10'><span className='font-novaSemi'>AKGEC:</span> Innovating for a Brighter Tomorrow</h2>
            <p className='text-xs mt-4 leading-5'>More than just a center for higher education, AKGEC stands as a beacon of academic innovation, cultural richness, and a community dedicated to transforming the future through contemporary ideas and technology-driven solutions.</p>
          </div>
          <div className=''>
            <ul className='flex flex-wrap justify-center gap-8 max-lg:gap-4 text-xs max-lg:text-[9px]'>
              <li className='flex items-center gap-2'>
                <img className='w-8 h-8 max-lg:w-5 max-lg:h-5' src="/image/icons/icon-academic-excellence.png" alt="academic logo" />
                <p>Educational Mastery</p>
              </li>
              <li className='flex items-center gap-2'>
                <img className='w-8 h-8 max-lg:w-5 max-lg:h-5' src="/image/icons/icon-industry-patronage.png" alt="industry logo" />
                <p>Industry Collaboration</p>
              </li>
              <li className='flex items-center gap-2'>
                <img className='w-8 h-8 max-lg:w-5 max-lg:h-5' src="/image/icons/icon-blobal-exposure.png" alt="global logo" />
                <p>International Outlook</p>
              </li>
              <li className='flex items-center gap-2'>
                <img className='w-8 h-8 max-lg:w-5 max-lg:h-5' src="/image/icons/icon-based-careers.png" alt="career logo" />
                <p>Flexible Career Paths</p>
              </li>
              <li className='flex items-center gap-2'>
                <img className='w-8 h-8 max-lg:w-5 max-lg:h-5' src="/image/icons/icon-return-on-investment.png" alt="investment logo" />
                <p>Value for Investment</p>
              </li>
            </ul>
          </div>

        </div>

      </section>

      <section className='relative min-h-screen'>
        <div className='absolute inset-0 bg-Edge bg-cover bg-right bg-fixed grayscale'></div>
        <div className='absolute z-20 w-full py-5 bg-[#575554] text-white'>
          <h2 className='text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-sm text-center font-novaReg uppercase'>As a Part of AKGEC, You Gain the ADVANTAGE!</h2>
        </div>
        <div className="absolute inset-0 top-20 grid grid-cols-3 max-md:grid-cols-2 max-lg:mx-auto gap-4 p-8 max-w-5xl max-md:max-w-2xl">
          <div className="bg-teal-500 text-black rounded-3xl card overflow-hidden">
            <div className='h-16 flex items-center pl-5 bg-indigo-950'>
              <img className='w-9 h-9' src="/image/icons/icon-academic-excellence.png" alt="academic logo" />
            </div>
            <div className='p-4'>
              <h2 className="text-2xl font-bold mb-2 max-lg:text-xl max-md:text-lg">Edge Through Intellectual Achievement</h2>
              <div className='overflow-y-auto max-h-48 custom-scrollbar'>
                <p className="text-sm overflow-auto">
                AKGEC's educational framework is thoughtfully crafted to immerse you in a wide array of opportunities, ranging from a dynamic choice-based credit system to hands-on project-based learning. This approach fosters an environment where you are inspired to delve into intellectually stimulating challenges that will pave the way for your future. Our students engage in practical learning experiences that not only enhance their academic credentials but also nurture their passion for their selected career paths, preparing them to become skilled techno-professionals in a rapidly evolving world.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#facc15] text-black rounded-3xl card overflow-hidden">
            <div className='h-16 flex items-center pl-5 bg-indigo-950'>
              <img className='w-8 h-8' src="/image/icons/icon-industry-patronage.png" alt="industry logo" />
            </div>

            <div className='p-4'>
              <h2 className="text-2xl font-bold mb-2 max-lg:text-xl max-md:text-lg">Edge Through Professional Advocacy</h2>
              <div className='overflow-y-auto max-h-48 custom-scrollbar'>
                <p className="text-sm overflow-auto">
                Our strategic partnerships with renowned multinational corporations guarantee that you will experience ongoing professional development and unique opportunities to connect with leading organizations and industry pioneers. You will gain an advantage through access to a corporate-standard learning environment, state-of-the-art industry-sponsored facilities, and corporate professionals actively engaged in enhancing and transforming the educational experience.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#f6ffaa] rounded-3xl card overflow-hidden">
            <div className='h-16 flex items-center pl-5 bg-indigo-950'>
              <img className='w-8 h-8' src="/image/icons/icon-blobal-exposure.png" alt="global logo" />
            </div>

            <div className='p-4'>
              <h2 className="text-2xl font-bold mb-2 max-lg:text-xl max-md:text-lg">Edge from International Exposure</h2>
              <div className='overflow-y-auto max-h-48 custom-scrollbar'>
                <p className="text-sm overflow-auto">
                At AKGEC, you gain a significant advantage through our extensive international exposure, providing you with unique opportunities to engage with diverse cultures and global practices. Our collaborations with esteemed global institutions and participation in international exchange programs empower you to develop a broader perspective and enhance your employability. You’ll be equipped with the skills and insights needed to thrive in a competitive global landscape, ensuring you stand out in your chosen career path.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#ffbcbc] text-black rounded-3xl card overflow-hidden">
            <div className='h-16 flex items-center pl-5 bg-indigo-950'>
              <img className='w-8 h-8' src="/image/icons/icon-based-careers.png" alt="career logo" />
            </div>
            <div className='p-4'>
              <h2 className="text-2xl font-bold mb-2 max-lg:text-xl max-md:text-lg">Edge from Financial Gains</h2>
              <div className='overflow-y-auto max-h-48 custom-scrollbar'>
                <p className="text-sm overflow-auto">
                AKGEC provides you with a distinct advantage through our focus on financial gains, ensuring that your investment in education translates into tangible benefits. With access to scholarships, internships, and career placement programs, you are positioned to maximize your financial returns. Our strong ties with industry partners enhance your employability, paving the way for lucrative career opportunities that yield significant rewards, both personally and professionally.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white text-black rounded-3xl card overflow-hidden">
            <div className='h-16 flex items-center pl-5 bg-indigo-950'>
              <img className='w-8 h-8' src="/image/icons/icon-return-on-investment.png" alt="investment logo" />
            </div>
            <div className='p-4'>
              <h2 className="text-2xl font-bold mb-2 max-lg:text-xl max-md:text-lg">Edge Through Investment Value</h2>
              <div className='overflow-y-auto max-h-48 custom-scrollbar'>
                <p className="text-sm overflow-auto">
                At AKGEC, you experience a unique advantage through our emphasis on investment value, where every aspect of your education is designed to maximize your potential returns. By offering a robust curriculum, industry-relevant training, and access to state-of-the-art resources, we ensure that your investment in your education pays off. Our focus on practical learning and professional development equips you with the skills and knowledge that increase your marketability and lead to rewarding career paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AkgEdge