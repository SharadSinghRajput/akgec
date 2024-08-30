"use client";
import {Overview} from './Overview';
import Header from '../../Components/Header';
import { AboutSideBar } from '../../Components/AboutSideBar';
import Breadcrumb from '../../Components/Breadcrumb';

const ButtoName = {
  name: "Apply Now",
  Link: "",
};
const BreadCrumb = [
  {
    name: "about",
    Link: "",
  },
  {
    name: "Overview",
    Link: "about",
  }

]

export default function Home() {
  return (
    <>
      
            <Overview />
    </>
  );
}
