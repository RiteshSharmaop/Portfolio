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
            desc="A robust web application developed using the MERN stack, Leaflet.js, and Socket.io, enabling students to log in with their email, password, and college credentials. The platform offers real-time GPS-based bus tracking, allowing students to view live bus locations, calculate optimal navigation routes from their current location to the bus and college, and ensure efficient travel management. Integrated with secure user authentication, session handling, and WebSocket-based real-time updates, the application enhances usability and scalability while providing a seamless logout feature"
            imgLink={img3}
            />

          <ProjectBox
            title="RideGo"
            navigateTo="/wip"
            desc=" 
A comprehensive ride-hailing application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that replicates the functionality of popular platforms like Uber. The app enables users to book rides by entering pickup and drop-off locations with real-time route visualization using Map APIs. Key features include user authentication, fare estimation, real-time driver tracking, and ride status updates. Drivers can manage ride requests, navigate optimized routes, and track their trips. The app leverages Socket.io for real-time communication, ensuring smooth coordination between riders and drivers. This project showcases advanced web and mobile development techniques, integrating secure APIs, scalable architecture, and interactive user interfaces for a seamless ride-booking experience."
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
