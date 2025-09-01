import React from "react";
import img2 from "../Images/playmee-modern-logo.svg";
import img3 from "../Images/mapsee.svg";
import musicfi from "../Images/musicfi.svg";
import rideit from "../Images/rideit.svg";
import nft from "../Images/nftMarketplace.svg";
import ProjectBox from "./ProjectBox";
import ProjectInfo from "./ProjectInfo";
import secure from "../Images/secureblock.png"
import { playMee, brainMesh } from "./Data";
import multillmcover from "../Images/multillmcover.svg"
import multillmprofile from "../Images/multillmprofile.svg"
import myFinanceprofile from "../Images/myFinance.svg"


export default function Projects() {


  return (

    <div>
      <div>

      <section className="projects" id="projects">
        <h1 className="heading">
          {" "}
          my<span> project</span>{" "}
        </h1>

        <div className="box-container">
          <ProjectBox
            title="Brain Mesh"
            navigateTo="/pro/"
            description = {brainMesh}
            architecture = "/#"
            model = "https://app.eraser.io/workspace/KTp7oAXRYDHu5ymAYL89"
            github = "https://github.com/RiteshSharmaop/BrainMash"
            host = 'https://brainmash-1.onrender.com/'
            desc="Built Multi-LLM platform enabling users to query multiple AI models simultaneously, summarize responses with GPT, and Unify, compare, and summarize diverse AI models in real-time."
            imgLink={multillmprofile}
            />
          <ProjectBox
            title="SecureBlock"
            navigateTo="/wip"
            desc="Developed Secure_Block, an AI-powered cyber complaint platform with automated PHP chatbot reporting, risk-based Random Forest prioritization, React frontend, and scalable cloud deployment."
            github = "https://github.com/RiteshSharmaop/Secure-Block"
            host = 'https://app.eraser.io/workspace/jXDyAUaAhqd21biVxik5?elements=MiVdJFsS0YVk-1-3bEdY4w'
            model = "https://app.eraser.io/workspace/jXDyAUaAhqd21biVxik5?elements=MiVdJFsS0YVk-1-3bEdY4w"
            imgLink={secure}
            />
            <ProjectBox
              title="Map See"
              navigateTo="/wip"
              desc="Developed Mapsee, a college bus tracking platform with real-time locations, route management, staff attendance, student access, and secure JWT authentication."
              github = "https://github.com/RiteshSharmaop/MapSee"
              host = 'https://app.eraser.io/workspace/KTp7oAXRYDHu5ymAYL89'
              model = "https://app.eraser.io/workspace/KTp7oAXRYDHu5ymAYL89"
              imgLink={img3}
              />
            <ProjectBox
              title="Ride Go"
              navigateTo="/wip"
              desc="Built MERN-based ride-hailing app with real-time driver tracking, route visualization, fare estimation, user authentication, and seamless rider-driver communication."
              github = "https://github.com/RiteshSharmaop/Uber"
              host = 'https://app.eraser.io/workspace/KTp7oAXRYDHu5ymAYL89'
              model = "https://app.eraser.io/workspace/KTp7oAXRYDHu5ymAYL89"
              imgLink={rideit}
              />
          <ProjectBox 
            title="Play Mee"
            navigateTo="/pro/"
            desc="Developed backend web app with RESTful API, JWT authentication, video uploads via Cloudinary, CRUD operations, likes, subscriptions, shares, and activity tracking."
            imgLink={img2}
            description = {playMee}
            architecture = "/#"
            model = "https://app.eraser.io/workspace/ZyIsCQwoTNzUUdV8IRAp?origin=share"
            github = "https://github.com/RiteshSharmaop/PlayMee"
            host = 'https://github.com/RiteshSharmaop/PlayMee/blob/master/readme.md'
            />


            <ProjectBox
              title="myFinance"
              navigateTo="/wip"
              desc="Developed myFinance, a React-based personal finance app enabling users to track expenses, categorize transactions, and visualize income and spending trends"
              imgLink={myFinanceprofile}
              github = "https://github.com/RiteshSharmaop/myFinance"
              />
        </div>
      </section>
            </div>
    </div>
  );
}
