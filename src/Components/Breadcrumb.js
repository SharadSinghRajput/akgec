export default function Breadcrumb({data}) {
    return (
        <ul className='flex justify-start gap-2'>
          <li className='uppercase text-xs'>Home</li>
          {data?.map((item, index)=>(
            <li key={index}  className={`before:content-['/'] before:pr-2 uppercase text-xs ${
              index === data.length - 1 ? 'font-semibold' : ''
            }`}>{item.name}</li>
          ))}
        </ul>
    );
}