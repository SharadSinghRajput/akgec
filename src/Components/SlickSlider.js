"use client";

import ProgramHighlightsSlider from "./ProgramHighlightsSlider";

export default function SlickSlider() {

  return (
    <section className="h-full bg-[#F3F3F3] py-8 ">
      <div className="break1:max-w-[1650px] break2:max-w-[1320px] break3:max-w-[1140px] break4:max-w-[960px] mx-auto">
        <header className="text-center mb-8 max-xl:mb-5">
          <h1 className="text-[42px] font-novaReg max-md:text-2xl max-sm:text-xl max-sm:px-4 text-gray-700">
            A Glimpse into Our <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent">Vibrant Journey</span>
          </h1>
        </header>
        <div className="grid grid-cols-12">
          <div className="col-span-4 max-lg:col-span-12 max-lg:mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-lg:grid-cols-2 max-lg:px-10 max-sm:px-5">
              <article className="border-r border-b border-gray-300 p-6 max-xl:p-4 leading-5 max-lg:text-center">
                <h2 className="text-5xl xl:text-5xl  font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-gray-700 ">
                  282
                </h2>
                <span className="bg-gradient-to-tr from-amber-500 to-red-600 text-white py-1.5 mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold">
                  Companies
                </span>
                <p className="mt-3 text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                  For 2023-24 campus <br /> placements{" "}
                </p>
              </article>

              <article className="border-b border-gray-300 p-6 max-xl:p-4 leading-5 max-lg:text-center">
                <h2 className="text-5xl  xl:text-5xl  font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-gray-700">
                  1406
                </h2>
                <span className="bg-gradient-to-tr from-amber-500 to-red-600 text-white py-1.5 mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold">
                  placements
                </span>
                <p className="mt-3 text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                  Offered in <br /> 2023-24 Batch
                </p>
              </article>

              <article className="border-r border-gray-300 p-6 max-xl:p-4 leading-5 max-lg:text-center">
                <h2 className="text-5xl  xl:text-5xl  font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-gray-700">
                  <span className="whitespace-nowrap">
                    33.80{" "}
                    <span className="text-gray-600 font-novaLight text-xl -ml-3 pr-5  max-2xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base">
                      LPA
                    </span>
                  </span>
                </h2>
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-1.5 mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold">
                  Engineering
                </span>
                <p className="mt-3 text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                  Highest Package <br />
                  Offered{" "}
                </p>
              </article>

              <article className="p-6 max-xl:p-4 leading-5 max-lg:text-center">
                <h2 className="text-5xl  xl:text-5xl  font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-gray-700">
                  <span className="whitespace-nowrap">
                    1.13{" "}
                    <span className="text-gray-600 font-novaLight text-xl -ml-3 max-2xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base">
                      CR
                    </span>
                  </span>
                </h2>
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-1.5 mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold">
                  Engineering
                </span>
                <p className="mt-3 text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                  Highest Package in <br />
                  International
                </p>
              </article>
            </div>
          </div>
          <div className="ml-5 col-span-8 max-lg:col-span-12">
            <ProgramHighlightsSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
