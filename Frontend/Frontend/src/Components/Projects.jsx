import React from "react";
import img from "../Images/6.jpg";
import ProjectBox from "./ProjectBox";
export default function Projects() {
  return (
    <div>
      <div>

      <section className="projects" id="projects">
        <h1 className="heading">
          {" "}
          my <span>portfolio</span>{" "}
        </h1>

        <div className="box-container">
          <ProjectBox
            title="PlayMee"
            desc="A Backend Web App Where user can register and login to do tweet, upload video and can do like, subscribe share, and track history. Developed a scalable RESTful API (CRUD) using Node.js, Express, and MongoDB. Implemented secure JWT authentication, data validation middleware, and conducted thorough endpoint testing to ensure reliability, high performance, and modularity. Handling videos vie a Cloudinary and Multer "
            imgLink={img}
            />

          <ProjectBox
            title="MapSee"
            desc="A Backend Web App Where user can register and login to do tweet, upload video and can do like, subscribe share, and track history. Developed a scalable RESTful API (CRUD) using Node.js, Express, and MongoDB. Implemented secure JWT authentication, data validation middleware, and conducted thorough endpoint testing to ensure reliability, high performance, and modularity. Handling videos vie a Cloudinary and Multer "
            imgLink={img}
          />

          <ProjectBox
            title="NFTs MarketPlace"
            desc="A Backend Web App Where user can register and login to do tweet, upload video and can do like, subscribe share, and track history. Developed a scalable RESTful API (CRUD) using Node.js, Express, and MongoDB. Implemented secure JWT authentication, data validation middleware, and conducted thorough endpoint testing to ensure reliability, high performance, and modularity. Handling videos vie a Cloudinary and Multer "
            imgLink={img}
            />
        </div>
      </section>
            </div>
    </div>
  );
}
