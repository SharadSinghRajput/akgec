function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="grid grid-cols-2 max-w-7xl w-full mx-auto">
      {/* Section 1 */}
      <div className="flex-1 flex flex-col justify-center items-center min-h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-2 flex-wrap justify-center">
              <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 w-[48%]">
                <h1 className="text-3xl font-bold text-center">15+</h1>
                <p className="text-lg text-center">Program</p>
              </div>
              <div className="p-4 rounded-lg bg-yellow-100 w-[48%]" >
                <h1 className="text-3xl font-bold text-center">5K+</h1>
                <p className="text-lg text-center">Students</p>
              </div>
              <div className="p-4 rounded-lg bg-yellow-100 w-[48%]">
                <h1 className="text-3xl font-bold text-center">15+</h1>
                <p className="text-lg text-center">R&D Centers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 1 */}
      {/* Section 2 */}

      <div className="flex-1 flex flex-col justify-center items-center min-h-full">
        <div className="grid grid-cols-2 gap-4 max-w-2xl w-full">
          <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
            <div></div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Core
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
              </p>
            </div>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-4 right-4 text-gray-300 group-hover:text-gray-400">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>

          <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
            <div></div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Curriculum & Pedagogy
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
              </p>
            </div>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-4 right-4 text-gray-300 group-hover:text-gray-400">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>

          <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
            <div></div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                College Advisory
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
              </p>
            </div>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-4 right-4 text-gray-300 group-hover:text-gray-400">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707 .293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>

          <div className="relative bg-white rounded-lg shadow-lg flex flex-col justify-between focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
            <div className="flex-grow overflow-hidden"> 
              <img
                alt=""
                src="/image/slider-home/akg-slider-img-1.jpg"
                className="w-full h-full object-fill rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
      {/* Section 2 */}
    </div>
  )
}
