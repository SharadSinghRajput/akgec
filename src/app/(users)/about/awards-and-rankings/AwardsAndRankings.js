"use client"

import RankingSlider from "@/Components/RankingSlider";

const rank = [
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>QS I-Gauge overall<br />-2024</>,
        url: 'Click to Read More'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>QS I-Gauge Faculty Quality<br />-2024</>,
        url: 'Click to Read More'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>QS I-Gauge Governance & Structure<br />-2024</>,
        url: 'Click to Read More'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>QS I-Gauge Employability<br />-2024</>,
        url: 'Click to Read More'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>QS I-Gauge Academic Development<br />-2024</>,
        url: 'Click to Read More'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>QS I-Gauge Teaching & Learning<br />-2024</>,
        url: 'Click to Read More'
    },
];

export default () => {
    return (
        <>
            <section className="bg-BG16 w-full bg-cover bg-center bg-no-repeat relative">
                {/* Overlay */}
                <div className="absolute w-full h-full z-0 bg-black bg-blend-darken bg-opacity-70" />
                {/* Content */}
                <div className="max-w-[1400px] mx-auto px-3 relative z-10 py-28 pb-40">
                    <div className="pt-20 w-full">
                    {/* Star Ratings */}
                    <div className="flex gap-2 w-full items-center mb-4 justify-center lg:justify-start">
                        {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            width="20"
                            height="20"
                            fill="orange"
                        >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                        </svg>
                        ))}
                    </div>
                    {/* Heading and Description */}
                    <div className="w-full lg:w-6/12 mx-auto lg:mx-0 text-center lg:text-left">
                        <h2 className="text-[32px] lg:text-[42px] uppercase font-novaReg font-bold text-white leading-tight">
                        <span className="text-secondary">Ranked #18</span>
                        <br />
                        among The Best
                        <br />
                        Universities In India By
                        <br />
                        <span className="text-secondary">NIRF Rankings 2024</span>
                        </h2>
                        <p className="w-full lg:w-9/12 text-lg font-novaBold mt-5 text-white mx-auto lg:mx-0">
                        AKG University has made a remarkable achievement by securing the 18th
                        spot in the prestigious NIRF (National Institutional Ranking
                        Framework) Rankings 2024, released by the Ministry of Education
                        (MoE), Government of India.
                        </p>
                    </div>
                    </div>
                </div>
            </section>

            <section className="-mt-32 bg-gray-100">
                <div className="max-w-[1400px] mx-auto px-3">
                    <div className="flex w-full">
                    <div className="px-3 w-full">
                        {/* QS I-Gauge Ranking */}
                        <div className="flex items-center w-full">
                        <h3 className="text-3xl font-novaBold text-white items-center text-center w-full mb-6 uppercase">
                            QS I-Gauge Ranking
                        </h3>
                        </div>
                        <div className="-mt-10 z-10">
                        <div className="w-full">
                            <RankingSlider />
                        </div>
                        </div>

                        {/* Institution Rankings */}
                        <div className="flex items-center w-full mt-14">
                        <h3 className="text-3xl font-novaBold text-black items-center text-center w-full mb-6 uppercase">
                            Institution Rankings
                        </h3>
                        </div>
                        <div className="w-full">
                        <RankingSlider />
                        </div>

                        {/* NAAC Rankings */}
                        <div className="flex items-center w-full mt-14">
                        <h3 className="text-3xl font-novaBold text-black items-center text-center w-full mb-6 uppercase">
                            NAAC Rankings
                        </h3>
                        </div>
                        <div className="w-full">
                        <RankingSlider />
                        </div>
                    </div>
                    </div>
                </div>
                </section>


                <section className="bg-BG17 w-full bg-no-repeat bg-cover bg-center relative">
  <div className="absolute w-full h-full bg-gradient-to-r from-sky-600 from-10% via-sky-500 via-30% to-emerald-500/10 to-90%" />
  <div className="max-w-[1400px] mx-auto px-3 relative z-10">
    <div className="py-36 w-full md:w-6/12 text-center md:text-left mx-auto lg:mx-1">
      {/* Rating Stars */}
      <div className="flex gap-2 justify-center md:justify-start w-fit mb-4 mx-auto md:mx-0">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="20"
            height="20"
            fill="orange"
          >
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
          </svg>
        ))}
      </div>

      {/* Heading */}
      <h2 className="mb-2 text-[28px] md:text-[42px] font-novaBold text-white leading-tight">
        Ranks <span className="text-secondary">#1</span> Among Top <br />
        Private Indian Universities in<br />
        <span className="text-secondary">QS I-Gauge Indian Ranking 2024</span>
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg font-novaBold text-white mt-5 w-11/12 mx-auto md:mx-0">
        AKG University Achieves 134th Overall Rank in Asia and Ranks #1 Among Private Universities in India in QS I-Gauge Indian University Rankings 2024
      </p>
    </div>
  </div>
</section>


            <section className="pt-24 pb-12 bg-gray-100">
                <div className="max-w-[1400px] mx-auto px-3">
                    {/* First Row */}
                    <div className="flex flex-col md:flex-row w-full gap-5 -mt-6 -mx-3">
                    {/* The Week Rankings */}
                    <div className="w-full md:w-8/12 mt-6 px-3">
                        <div className="flex items-center w-full">
                        <h3 className="text-2xl md:text-3xl font-novaBold text-black text-center md:text-center w-full mb-6 uppercase">
                            The Week Rankings
                        </h3>
                        </div>
                        <RankingSlider slide={2} hiddenBtn={true} />
                    </div>

                    {/* India Today Rankings */}
                    <div className="w-full md:w-4/12 mt-6 px-3">
                        <div className="flex items-center w-full">
                        <h3 className="text-2xl md:text-3xl font-novaBold text-black text-center md:text-left w-full mb-6 uppercase">
                            India Today Rankings
                        </h3>
                        </div>
                        <RankingSlider slide={1} hiddenBtn={true} />
                    </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-col md:flex-row w-full mt-6 -mx-3">
                    {/* NAAC Accreditation */}
                    <div className="w-full md:w-4/12 mt-6 px-3">
                        <div className="flex items-center w-full">
                        <h3 className="text-2xl md:text-3xl font-novaBold text-black text-center md:text-left w-full mb-6 uppercase">
                            NAAC Accreditation
                        </h3>
                        </div>
                        <RankingSlider slide={1} hiddenBtn={true} />
                    </div>

                    {/* QS I-GAUGE Ratings */}
                    <div className="w-full md:w-8/12 mt-6 px-3">
                        <div className="flex items-center w-full">
                        <h3 className="text-2xl md:text-3xl font-novaBold text-black text-center md:text-center w-full mb-6 uppercase">
                            QS I-GAUGE Ratings
                        </h3>
                        </div>
                        <RankingSlider slide={2} hiddenBtn={true} />
                    </div>
                    </div>
                </div>
                </section>

        </>
    );
};

