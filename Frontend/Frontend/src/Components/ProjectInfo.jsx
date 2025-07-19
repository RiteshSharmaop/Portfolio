import React from "react";

import {
  Github,
  Linkedin,
  Globe,
  Image ,
  LayoutGrid  
} from "lucide-react";
import { useLocation } from "react-router-dom";

function ProjectInfo(props) {
  const location = useLocation();
  const { state } = location || {};

  // hosted link and github not set do it 
  const github = state.github;
  const page = state.page;
  const model = state.model
  const archi = state.architecture
  // console.log("okay " ,github);
  const links = [
    {
      icon: Globe,
      href: page ,
      label: "Hosted",
      colorClass: "hover-codechef",
    },
    
    {
      icon: LayoutGrid ,
      href: archi ,
      label: "Architecture",
      colorClass: "hover-linkedin",
    },
    {
      icon: Image ,
      href: model ,
      label: "Model Diagram",
      colorClass: "hover-leetcode",
    },
    {
      icon: Github,
      href: github,
      label: "GitHub",
      colorClass: "hover-github",
    },
    
  
  ];
  const title = state.title;
  const [firstPart, secondPart] = title.split(" ", 2);
  return (
    <>
      <section className="projectInfo">
        {/* prop.projectName */}
        <h1 className="heading"> {firstPart}<span>{secondPart} </span> </h1>
        <div className="proImg">
          {/* props.cobevimg */}
          <img src={state.img} alt="coverimg" className="coverImagePro" srcset="" />
        </div>
        <div className="sourcecode">
          <div className="github">
            {/* props.githublink */}
            <div className="social-buttons">
              {links.map(({ icon: Icon, href, label, colorClass }) => (
                <a
                  key={label}
                  href={href}
                  className={`social-button ${colorClass}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="center">
          <div className="aboutProject">
              <div dangerouslySetInnerHTML={{ __html: state.description }} />
            </div>
        </div>
        {/* also take ui images and show case in page ex: array od img and loop on it using for each ans */}
      </section>
    </>
  );
}

export default ProjectInfo;
