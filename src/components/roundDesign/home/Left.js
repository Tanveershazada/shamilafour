import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { bannerImg } from "../../../assest";
import CV from "../../../assest/CV.png";

const Left = () => {
    const [text]=useTypewriter({
        words:["Web Developer", "UI Designer", "Graphic Designer"],
        loop:true,
        typeSpeed:30,
        deleteSpeed:20,
        delaySpeed:2000
    });
  return (
    <div className="z-10 w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShadow">
      <div className="w-full h-3/5">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src={bannerImg}
          alt="bannerImg"
          loading="priority"
        />
      </div>
      <div className="w-full h-2/5">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-4xl font-semibold text-textColor">
            Shamila Khan
          </h1>
          <p className="text-base tracking-wide text-designColor">
            {text}<Cursor cursorBlinking="false" cursorStyle="|"/>
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <span className="text-xl duration-300 cursor-pointer hover:text-designColor">
              <FaGithub />
            </span>
            <span className="text-xl duration-300 cursor-pointer hover:text-designColor">
              <FaLinkedin />
            </span>
            <span className="text-xl duration-300 cursor-pointer hover:text-designColor">
              <SiYoutubemusic />
            </span>
            <span className="text-xl duration-300 cursor-pointer hover:text-designColor">
              <BsFacebook />
            </span>
            <span className="text-xl duration-300 cursor-pointer hover:text-designColor">
              <FiInstagram />
            </span>
            <span className="text-xl duration-300 cursor-pointer hover:text-designColor">
              <AiFillTwitterCircle />
            </span>
            <span className="text-xl duration-300 cursor-pointer hover:text-designColor">
              <FiMail />
            </span>
            
          </div>
        </div>
        <div className="flex h-14">
          <a className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor" href={CV} target="_blank" rel="noreferrer">
          <button className="flex items-center justify-center w-full h-full gap-2">Download CV <BsCloudLightningFill/></button>
          </a>
            <button className="w-1/2 h-full flex justify-center items-center gap-2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase hover:text-designColor duration-300s">Contact Me <FiSend/></button>
        </div>
      </div>
    </div>
  );
};

export default Left;
