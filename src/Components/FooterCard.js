const stats = [
  { text: 'Fortune Global', description: 'Plethora of Global Fortune MNC\'s awaiting you', value: '62' },
  { text: 'Fortune India', description: 'Earn best placement packages within Country\'s top Industries', value: '82' },
  { text: 'Placements', description: 'Highest Package Offered', value: '1.13', unit: 'CR' },
  { text: 'Amazon', description: 'Students selected by Amazon', value: '37+' },
  { text: 'Patents', description: 'filed successfully till date', value: '5500+' },
];
export default function FooterCard() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-cyan-500 ">
      <div className="mx-auto max-w-7xl px-32 sm:px-6 ">
        <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2">
          {stats?.map((stat, index) => (
            <div key={index} className="px-2 py-6 rounded-lg">
              <p className="mt-2 flex items-baseline gap-1">
                <span className="text-lg sm:text-2xl md:text-xl 2xl:text-[42px] font-novaLight tracking-tight text-white">{stat.value}</span>
                {stat.unit ? <span className="text-xs md:text-sm 2xl:text-xl font-novaLight text-white">{stat.unit}</span> : null}
              </p>
              <p className="mt-2 text-sm md:text-sm font-medium 2xl:text-base font-novaReg text-white">{stat.text}</p>
              <p className="mt-2 text-xs md:text-sm font-light text-white font-novaReg max-w-40 leading-[2px]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
