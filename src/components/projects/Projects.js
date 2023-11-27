import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assest";
import Title from "../roundDesign/home/Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="">
      <Title title="Recent" subTitle="Projects" />

      <div className="w-full grid grid-cols-2 gap-10">
        <div className="px-6">
          <ProjectCard
            title="Blog Website"
            category="Website"
            image={workImgThree}
          />

          <ProjectCard
            title="Bussiness Design"
            category="Design"
            image={workImgOne}
          />

          <ProjectCard
            title="Infinity Logo"
            category="Logo"
            image={workImgTwo}
          />

          <ProjectCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectCard
            title="Responsive Website"
            category="Eccomerce"
            image={workImgFour}
          />

          <ProjectCard
            title="Graphic Design"
            category="Design"
            image={workImgSix}
          />

          <ProjectCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          />

          <ProjectCard
            title="Zoss Logo"
            category="Logo"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
