import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import ResumeTitle from "./ResumeTitle";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="grid w-full grid-cols-9 px-6">
      <div className="col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Web Developer"
          subTitle="Facebook Inc."
          des="As a web developer, I create and maintain websites, ensuring functionality, responsiveness, and seamless user experiences through coding and design."
        />
        <ResumeCard
          badge="2019-Present"
          title="Frontend Developer"
          subTitle="Google Inc."
          des="
          As a frontend developer, I specialize in creating visually engaging and responsive user interfaces, combining design and coding for optimal user experiences."
        />
        <ResumeCard
          badge="2019-Present"
          title="Senior Developer"
          subTitle="ReactBD.com."
          des="
          As a senior developer, I bring extensive expertise to design, lead, and implement complex software solutions, fostering innovation and team collaboration."
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-4">
      <ResumeTitle title="Education" icon={<GiGraduateCap />}/>
      <ResumeCard
          badge="2018-2022"
          title="karakurum internatinal university"
          subTitle="Gilgit."
          des="I am a computer science student proficient in coding, navigating the intricacies of software development, and eager to apply theoretical knowledge."
        />
         <ResumeCard
          badge="2016-2018"
          title="Excellence College"
          subTitle="Gilgit."
          des="I'm a college student studying computer science, delving into coding, algorithms, and problem-solving to build a foundation in technology."
        />
         <ResumeCard
          badge="2006-2018"
          title="Army Public School"
          subTitle="Gilgit."
          des="
          I'm a dedicated computer science student in school, excelling in coding and eager to explore the fascinating world of technology."
        />

      </div>
    </div>
  );
};

export default Education;
