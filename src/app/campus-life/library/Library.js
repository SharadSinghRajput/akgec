const cont = [
    {
        desc: 'Known as a beacon of knowledge, the AKGU University Library, along with its specialized school libraries, houses an extensive collection of over 100,000 books and numerous print journals to support the academic and intellectual development of students. The library collection is regularly updated with the latest resources and study materials to benefit students from a wide range of disciplines.'
    },
    {
        desc: 'AKGU University Library strives to make library management highly accessible and user-friendly for students, researchers, and faculty members. It offers access to a vast array of resources, including online databases, multimedia, and print materials. By embracing technological advancements and innovative research practices, the libraries work closely with faculty to enhance research and learning skills. AKGU libraries are committed to providing an enriching, student-focused research and learning environment.'
    },
    {
        desc: 'Library Hours'
    }
];


const libraryTimings = [
    {
        day: "Monday to Friday",
        hours: "9:00 AM to 9:00 PM"
    },
    {
        day: "Saturdays (1st, 3rd, and 5th Saturday)",
        hours: "9:00 AM to 6:00 PM"
    },
    {
        day: "During Examination (Monday to Friday)",
        hours: "Up to 11:00 PM"
    },
    {
        day: "Book Circulation Timings",
        hours: "9:30 AM to 5:00 PM"
    }
];


const accessibilityInfo = [
    {
        info: "The library is open to the general public with prior approval from the designated authority (Monday to Friday)",
        hours: "9:00 AM to 6:30 PM"
    },
    {
        info: "The library extends access to the Underprivileged Section of Society upon receiving approval from the designated authority",
        hours: <><br />(Monday to Friday) 9:00 AM to 6:30 PM</>
    }
];


const Library = () => {
    return (
        <>
            <div className="">
                <h3 className="text-4xl font-novaReg mb-4">Learning Resource Centre</h3>
                <p className="text-base font-novaReg mb-4">{cont[0].desc}</p>
                <p className="text-base font-novaReg mb-4">{cont[1].desc}</p>
                <p className="text-3xl font-novaReg mb-4">{cont[2].desc}</p>

                <ul className="mb-6 ml-5 list-disc font-novaReg">
                    {libraryTimings.map((timing, index) => (
                        <li key={index} className="mb-3 pl-4">{timing.day}: {timing.hours}</li>
                    ))}
                </ul>

                <ul className="mb-2.5 ml-5 list-disc font-novaReg italic">
                    {accessibilityInfo.map((item, index) => (
                        <li key={index} className="mb-3 pl-4">{item.info}: {item.hours}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Library;
