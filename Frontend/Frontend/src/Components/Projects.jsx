import React from "react";
import img2 from "../Images/playmee-modern-logo.svg";
import img3 from "../Images/mapsee.svg";
import musicfi from "../Images/musicfi.svg";
import rideit from "../Images/rideit.svg";
import nft from "../Images/nftMarketplace.svg";
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
            navigateTo="/wip"
            desc="A Backend Web App Where user can register and login to do tweet, upload video and can do like, subscribe share, and track history. Developed a scalable RESTful API (CRUD) using Node.js, Express, and MongoDB. Implemented secure JWT authentication, data validation middleware, and conducted thorough endpoint testing to ensure reliability, high performance, and modularity. Handling videos vie a Cloudinary and Multer "
            imgLink={img2}
            />

          <ProjectBox
            title="MapSee"
            navigateTo="/wip"
            desc="A Backend Web App Where user can register and login to do tweet, upload video and can do like, subscribe share, and track history. Developed a scalable RESTful API (CRUD) using Node.js, Express, and MongoDB. Implemented secure JWT authentication, data validation middleware, and conducted thorough endpoint testing to ensure reliability, high performance, and modularity. Handling videos vie a Cloudinary and Multer "
            imgLink={img3}
            />

          <ProjectBox
            title="RideGo"
            navigateTo="/wip"
            desc="A Backend Web App Where user can register and login to do tweet, upload video and can do like, subscribe share, and track history. Developed a scalable RESTful API (CRUD) using Node.js, Express, and MongoDB. Implemented secure JWT authentication, data validation middleware, and conducted thorough endpoint testing to ensure reliability, high performance, and modularity. Handling videos vie a Cloudinary and Multer "
            imgLink={rideit}
            />
          <ProjectBox
            title="NFTs MarketPlace"
            navigateTo="/wip"
            desc="A Backend Web App Where user can register and login to do tweet, upload video and can do like, subscribe share, and track history. Developed a scalable RESTful API (CRUD) using Node.js, Express, and MongoDB. Implemented secure JWT authentication, data validation middleware, and conducted thorough endpoint testing to ensure reliability, high performance, and modularity. Handling videos vie a Cloudinary and Multer "
            imgLink={nft}
            />
            <ProjectBox
              title="Music-Ii"
              navigateTo="/wip"
              desc="A Backend Web App Where user can register and login to do tweet, upload video and can do like, subscribe share, and track history. Developed a scalable RESTful API (CRUD) using Node.js, Express, and MongoDB. Implemented secure JWT authentication, data validation middleware, and conducted thorough endpoint testing to ensure reliability, high performance, and modularity. Handling videos vie a Cloudinary and Multer "
              imgLink={musicfi}
              />
        </div>
      </section>
            </div>
    </div>
  );
}
