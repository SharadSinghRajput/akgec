const stats = [
  { text: 'Fortune Global', description: 'Plethora of Global Fortune MNC\'s awaiting you', value: '62' },
  { text: 'Fortune India', description: 'Earn best placement packages within Country\'s top Industries', value: '82' },
  { text: 'Placements', description: 'Highest Package Offered', value: '1.13', unit: 'CR' },
  { text: 'Amazon', description: 'Students selected by Amazon', value: '37+' },
  { text: 'Patents', description: 'filed successfully till date', value: '5500+' },
];
export default function FooterCard() {
  return (
    <div className="bg-blue-500 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-">
        <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2">
          {stats.map((stat) => (
            <div key={`${stat.text}-${stat.description}`} className="px-4 py-6 rounded-lg">
              <p className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl md:text-2xl 2xl:text-5xl font-semibold tracking-tight text-white">{stat.value}</span>
                {stat.unit ? <span className="text-xs md:text-sm 2xl:text-3xl text-white">{stat.unit}</span> : null}
              </p>
              <p className="text-sm md:text-sm font-medium 2xl:text-2xl  text-white">{stat.text}</p>
              <p className="text-xs md:text-xs font-light text-white 2xl:text-base">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
