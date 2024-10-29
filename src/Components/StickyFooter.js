"use client";

const StickyFooter = ({ ShowState }) => {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto w-full duration-500">
        <div
          className={`transition-all overflow-hidden  
                z-50 fixed bottom-[50%] -right-7 flex justify-end items-center max-md:gap-2 gap-5 px-5 max-md:flex-col-reverse`}
        >
          <div className="flex items-center justify-end gap-5 px-2 py-3 max-md:flex-col fixed">
            <div className="max-md:hidden">
              <ul className="flex flex-col items-end gap-0.5 text-white max-md:p-2 justify-center overflow-hidden">
                <li className="relative group">
                  <div className="bg-btn-gradient animate-gradient rounded-lg flex items-center justify-center">
                    <span className="w-0 transition-all group-hover:w-20 overflow-hidden hover:visible group-hover:px-4 group-hover:py-1.5 rounded-lg text-xs duration-300">
                      Whatsapp
                    </span>
                    <a className="flex items-center px-4 py-3 gap-2" href="whatsapp">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="20"
                        width="20"
                      >
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z" />
                      </svg>
                    </a>
                  </div>
                </li>
                <li className="relative group">
                  <div className="bg-btn-gradient animate-gradient rounded-lg flex items-center">
                    <span className="w-0 transition-all group-hover:w-20 overflow-hidden hover:visible group-hover:px-4 group-hover:py-1.5 rounded-lg text-xs duration-300">
                      Call Us
                    </span>
                    <a className="flex items-center px-4 py-3" href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </a>
                  </div>
                </li>
                <li className="relative group">
                  <div className="bg-btn-gradient animate-gradient rounded-lg flex items-center">
                    <span className="w-0 transition-all group-hover:w-20 overflow-hidden hover:visible group-hover:px-4 group-hover:py-1.5 rounded-lg text-xs duration-300">
                      Facebook
                    </span>
                    <a className="flex items-center px-4 py-3 gap-2" href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </div>
                </li>
                <li className="relative group">
                  <div className="bg-btn-gradient animate-gradient rounded-lg flex items-center">
                    <span className="w-0 transition-all group-hover:w-20 overflow-hidden hover:visible group-hover:px-4 group-hover:py-1.5 rounded-lg text-xs duration-300">
                      Twitter
                    </span>
                    <a className="flex items-center px-4 py-3 gap-2" href="">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M17.77 6.23a1 1 0 0 0-1.41 0L12 10.59 7.64 6.23a1 1 0 0 0-1.41 1.41L10.59 12l-4.36 4.36a1 1 0 0 0 1.41 1.41L12 13.41l4.36 4.36a1 1 0 0 0 1.41-1.41L13.41 12l4.36-4.36a1 1 0 0 0 0-1.41z" />
                      </svg>
                    </a>
                  </div>
                </li>
                <li className="relative group">
                  <div className="bg-btn-gradient animate-gradient rounded-lg flex items-center">
                    <span className="w-0 transition-all group-hover:w-20 overflow-hidden hover:visible group-hover:px-4 group-hover:py-1.5 rounded-lg text-xs duration-300">
                      LinkedIn
                    </span>
                    <a className="flex items-center px-4 py-3 gap-2" href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                  </div>
                </li>
                <li className="relative group">
                  <div className="bg-btn-gradient animate-gradient rounded-lg flex items-center">
                    <span className="w-0 transition-all group-hover:w-20 overflow-hidden hover:visible group-hover:px-4 group-hover:py-1.5 rounded-lg text-xs duration-300">
                      Instagram
                    </span>
                    <a className="flex items-center px-4 py-3 gap-2" href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                  </div>

                </li>
                <li className="relative group">
                  <div className="bg-btn-gradient animate-gradient rounded-lg flex items-center">
                    <span className="w-0 transition-all group-hover:w-20 overflow-hidden hover:visible group-hover:px-4 group-hover:py-1.5 rounded-lg text-xs duration-300">
                      YouTube
                    </span>
                    <a className="flex items-center px-4 py-3 gap-2" href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={` max-w-screen-2xl mx-auto w-full bg-red-300 duration-500`}>
        <div className={`transition-all overflow-hidden ${ShowState ? "h-0" : "h-20"} z-50 fixed bottom-5 left-0 w-full flex justify-center items-center max-md:gap-2 gap-5 px-5 max-md:flex-col-reverse`}>
          <div className="flex-1 max-md:flex max-md:items-center bg-btn-gradient animate-gradient text-white rounded-lg pt-2 pb-1 overflow-hidden w-full px-2">
            <marquee className="font-bold">
              APPLY NOW for Ajay Kumar Garg Engineering College
            </marquee>
          </div>

          {/* <div className="w-96 bg-primary rounded-lg  max-md:w-full  max-md:flex  max-md:justify-between  max-md:items-center max-md:py-1">
            <div className="flex items-center justify-center gap-5 px-2 py-1.5 max-md:w-full">
              <div className="max-md:hidden">
                <ul className="flex items-center gap-5 text-white max-md:p-2 justify-center w-full ">
                  <li className=" ">
                    <a className="flex flex-col items-center gap-1" href="">
                      <img
                        className="w-4 h-4"
                        src="/image/social-icons/whatsapp.webp"
                        alt="Whatsapp"
                      />
                      <span className="text-[9px] max-md:hidden">Whatsapp</span>
                    </a>
                  </li>
                  <li>
                    <a className="flex flex-col items-center gap-1" href="">
                      <img
                        className="w-4 h-4"
                        src="/image/social-icons/calling.webp"
                        alt="Call Us"
                      />
                      <span className="text-[9px] max-md:hidden">Call Us</span>
                    </a>
                  </li>
                  <li>
                    <a className="flex flex-col items-center gap-1" href="">
                      <img
                        className="w-4 h-4"
                        src="/image/social-icons/compass.webp"
                        alt="360°"
                      />
                      <span className="text-[9px] max-md:hidden">360°</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center px-3 border-l border-gray-400 space-y-1 max-md:border-none max-md:w-full ">
                <ul className="flex items-center justify-center gap-4 leading-none max-md:w-full max-md:justify-evenly">
                  <li>
                    <a href="">
                      <img
                        className="w-4 h-4"
                        src="/image/social-icons/facebook.webp"
                        alt="Facebook"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="w-4 h-4"
                        src="/image/social-icons/twitter.webp"
                        alt="twitter"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="w-4 h-4"
                        src="/image/social-icons/linkedin.webp"
                        alt="linkedin"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="w-4 h-4"
                        src="/image/social-icons/instagram.webp"
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="w-4 h-4"
                        src="/image/social-icons/youtube.webp"
                        alt="youtube"
                      />
                    </a>
                  </li>
                </ul>
                <small className="text-[9px] max-md:hidden text-white">
                  Get Social with us
                </small>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default StickyFooter;
