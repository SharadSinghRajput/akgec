import Header from '@/Components/Header';
import SideBar from '@/Components/SideBar';

import After12th from './After12th';
import Image from 'next/image';

const ButtoName = {
  name: "Apply Now",
  Link: "",
};


const SideBarLink = [
  {name: "Our Identity" , link : "/overview"},
  {name: "Leadership" , link : ""},
  {name: "Leadership" , link : ""},
  {name: "Governance" , link : ""},
  {name: "Recognition and Approvals" , link : ""},
  {name: "Awards and Rankings" , link : ""},
  {name: "Institution Social Responsibility" , link : ""}
]

export default function Home() {
  return (
    <>
      
      
        <After12th />
      
    </>
  );
}
