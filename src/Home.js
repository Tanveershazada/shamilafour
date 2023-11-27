import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import { BsTelephonePlusFill } from "react-icons/bs";
import Left from "./components/roundDesign/home/Left";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import SideBar from "./components/roundDesign/home/SideBar";

const Home = () => {
  const ref=useRef()
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      if(e.target.contains(ref.current)){
        setSidenav(false)
      }
    })
  },[])
  return (
    <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between">
      <div className="flex flex-col w-16 gap-4 bg-transparent h-96">
        <div className="flex items-center justify-center w-full h-20 cursor-pointer bg-bodyColor rounded-3xl group">
          <div onClick={()=>setSidenav(true)} className="flex flex-col gap-1.5 overflow-hidden">
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block duration-300 group-hover:bg-designColor"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
          </div>
        </div>
        {
          sidenav && <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50">
            <div className="w-96 h-full relative">
              <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0}}
              animate={{ x: 0, opacity: 1}}
              transition={{ duration: 0.5}}
              className="w-full h-full bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
                <SideBar/>
                <span onClick={()=>setSidenav(false)} className="absolute top-0 -right-16 w-12 h-12 bg-bodyColor text-2xl text-textColor hover:text-designColor duration-300 cursor-pointer flex items-center justify-center z-50"><MdOutlineClose/></span>
              </motion.div>
            </div>
          </div>
        }
        <div className="flex flex-col items-center justify-between w-full py-6 h-80 bg-bodyColor rounded-3xl">
          <span
            onClick={() =>
              setAbout(true) &
              setResume(false) &
              setProjects(false) &
              setBlog(false) &
              setContact(false)
            }
            className="relative flex items-center justify-center w-full h-6 text-xl duration-300 cursor-pointer text-textColor hover:text-designColor group"
          >
            <FaUser />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              About
            </span>
          </span>

          <span
            onClick={() =>
              setAbout(false) &
              setResume(true) &
              setProjects(false) &
              setBlog(false) &
              setContact(false)
            }
            className="relative flex items-center justify-center w-full h-6 text-xl duration-300 cursor-pointer text-textColor hover:text-designColor group"
          >
            <IoIosPaper />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Resume
            </span>
          </span>

          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(true) &
              setBlog(false) &
              setContact(false)
            }
            className="relative flex items-center justify-center w-full h-6 text-xl duration-300 cursor-pointer text-textColor hover:text-designColor group"
          >
            <MdWork />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Projects
            </span>
          </span>

          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setBlog(true) &
              setContact(false)
            }
            className="relative flex items-center justify-center w-full h-6 text-xl duration-300 cursor-pointer text-textColor hover:text-designColor group"
          >
            <SiGooglechat />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Blog
            </span>
          </span>

          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setBlog(false) &
              setContact(true)
            }
            className="relative flex items-center justify-center w-full h-6 text-xl duration-300 cursor-pointer text-textColor hover:text-designColor group"
          >
            <FaEnvelope />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Contact
            </span>
          </span>

          <span className="relative flex items-center justify-center w-full h-6 text-xl duration-300 cursor-pointer text-textColor hover:text-designColor group">
            <BsTelephonePlusFill />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Call
            </span>
          </span>
        </div>
      </div>
      <div className="w-[94%] h-full bg-transparent flex items-center">
        {/* {left side} */}
        <Left />
        {/* {rightside} */}
        <div className="w-8/12 h-[95%] bg-bodyColor">
          <div className="w-full h-[95%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}

            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}

            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}

            {blog && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Blog />
              </motion.div>
            )}

            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
