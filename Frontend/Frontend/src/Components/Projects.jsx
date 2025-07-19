import React from "react";
import img2 from "../Images/playmee-modern-logo.svg";
import img3 from "../Images/mapsee.svg";
import musicfi from "../Images/musicfi.svg";
import rideit from "../Images/rideit.svg";
import nft from "../Images/nftMarketplace.svg";
import ProjectBox from "./ProjectBox";
import ProjectInfo from "./ProjectInfo";
import secure from "../Images/secureblock.png"


export default function Projects() {
  const data1 = `<div class="boxer">
    <h1 style="color: #F89F1B;"><span> PlayMee</span> 🎮🎵</h1>
    <p>An innovative platform combining Video & Tweet functionality.</p>
    <br>
    
    <h2 style="color: #F89F1B;"><span>Overview</span></h2>
    <p>PlayMee is a revolutionary platform built on the MERN stack (MongoDB, Express, React, Node.js) and structured with a microservices architecture. It allows users to upload and share videos, tweet, like, and comment on content, create playlists, and follow channels.</p>
    <br>
    <br>
    <h2 style="color: #F89F1B;">📦 What PlayMee Offers</h2>
    <h3 style="color: #F89F1B;">🎵 Music Integration</h3>
    <ul>
    <li>Play, pause, and queue your favorite songs.</li>
    <li>Create personalized playlists or explore trending tracks.</li>
    </ul>
    <br>
    <h3 style="color: #F89F1B;">🎥 Video Functionality</h3>
    <ul>
    <li>Watch trending videos and stream your favorite shows.</li>
    <li>Play, pause, and queue videos for a seamless viewing experience.</li>
    <li>Follow channels and engage with creators.</li>
    </ul>
    <br>
    <h3 style="color: #F89F1B;">🚀 Modern User Interface</h3>
    <ul>
    <li>Inspired by the DevUI YouTube Template for an intuitive design.</li>
    <li>Responsive and visually appealing across all devices.</li>
    </ul>
    
    <br>
    <h3 style="color: #F89F1B;">💾 Efficient Data Management</h3>
    <ul>
    <li>Seamless database integration for storing user preferences and activity logs.</li>
    <li>Personalized recommendations based on user behavior.</li>
    </ul>
    
    <br>
    <h2 style="color: #F89F1B;">✨ Key Features</h2>
    <ul>
    <li><strong>User Authentication:</strong> Register, log in, and manage profiles securely.</li>
    <li><strong>Tweeting:</strong> Create, update, and delete tweets.</li>
    <li><strong>Video Upload:</strong> Upload videos, customize thumbnails, and manage publishing status.</li>
    <li><strong>Commenting System:</strong> Add, edit, and delete comments on videos.</li>
    <li><strong>Subscriptions:</strong> Subscribe to channels and manage subscriptions.</li>
    <li><strong>Playlists:</strong> Create and manage playlists, add or remove videos.</li>
    <li><strong>Like/Dislike:</strong> Interact with videos, tweets, and comments.</li>
    </ul>
    <br>
    
    <h2 style="color: #F89F1B;">🛠️ Technologies Used</h2>
    <ul>
    <li><strong>Node.js:</strong> Backend API server.</li>
    <li><strong>Express.js:</strong> Web framework for routing.</li>
    <li><strong>MongoDB:</strong> Database for user, video, tweet, comment, and subscription data.</li>
    <li><strong>JWT Authentication:</strong> Secure access to user routes.</li>
    <li><strong>Multer:</strong> Handling file uploads (avatars, cover images, videos, thumbnails).</li>
    <li><strong>Cloudinary:</strong> Cloud-based platform for uploading photos and videos.</li>
    <li><strong>Postman:</strong> Api Testing.</li>
    </ul>
    
    <br>
    <h2 style="color: #F89F1B;">🌟 User Journey</h2>
    <ul>
    <li><strong>Sign Up and Personalization:</strong> Register, set up profiles, and personalize your dashboard.</li>
    <li><strong>Content Interaction:</strong> Upload videos, tweet updates, and engage with content through likes, comments, and subscriptions.</li>
    <li><strong>Playlists and Recommendations:</strong> Create playlists and enjoy personalized recommendations.</li>
    <li><strong>Seamless Streaming and Tweeting:</strong> Integrate video streaming and tweeting for a unique experience.</li>
    </ul>
    
    <br>
    <h2 style="color: #F89F1B;">📊 Backend Architecture</h2>
    <p>The backend is built to handle high concurrency and heavy data loads, featuring:</p>
    <ul>
    <li><strong>RESTful APIs:</strong> Seamless communication between frontend and backend.</li>
    <li><strong>Database Design:</strong> MongoDB collections for users, videos, tweets, comments, and subscriptions.</li>
    <li><strong>Middleware Integration:</strong> Custom middleware for error handling and logging.</li>
    </ul>
    
    <br>
    <h2 style="color: #F89F1B;">🔐 Security and Performance</h2>
    <ul>
    <li><strong>JWT Authentication:</strong> Secure user data with token-based authentication.</li>
    <li><strong>Data Validation:</strong> Ensure sanitized and validated input data.</li>
    <li><strong>Efficient Media Handling:</strong> Use Multer and Cloudinary for large file management.</li>
    <li><strong>Load Balancing and Caching:</strong> Improved server performance and response times.</li>
    </ul>
    <br>
    
    <h2 style="color: #F89F1B;">💡 Future Plans</h2>
    <ul>
    <li>Introduce live video streaming for creators.</li>
    <li>Enhance personalization using AI-powered recommendations.</li>
    <li>Enable monetization through ad revenue sharing and premium subscriptions.</li>
    <li>Add collaboration features for co-hosting videos or playlists.</li>
    </ul>
    
    <br>
    <h2 style="color: #F89F1B;">🌍 PlayMee Community</h2>
    
      <ul>
      <li>PlayMee fosters a vibrant and diverse community where users can explore, share, and engage with content. Whether you’re discovering a new video, tweeting updates, or curating playlists, PlayMee is the ultimate destination for creators and consumers alike.</li>
      
      
      <li>Join PlayMee today and experience the future of multimedia sharing!</li>
      </ul>
</div>
` 
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
            title="SecureBlock"
            navigateTo="/wip"
            desc="Designed and developed Secure Block, a group project focused on building an AI-driven cyber complaint platform (Dec’24). The system featured automated complaint reporting via a PHP-based chatbot, and prioritized cases using a Random Forest classifier built with scikit-learn for risk-based categorization. Integrated a secure MySQL database and automated the machine learning pipeline using Python, SQLAlchemy, and Pandas, along with real-time email alerts for high-risk incidents. Built a responsive frontend using React.js for complaint tracking and status updates. Deployed the full-stack solution on Vultr Cloud, ensuring scalability, automation, and end-to-end cybersecurity incident management."
            imgLink={secure}
            />
            <ProjectBox
              title="Map See"
              navigateTo="/wip"
              desc="A robust web application developed using the MERN stack, Leaflet.js, and Socket.io, enabling students to log in with their email, password, and college credentials. The platform offers real-time GPS-based bus tracking, allowing students to view live bus locations, calculate optimal navigation routes from their current location to the bus and college, and ensure efficient travel management. Integrated with secure user authentication, session handling, and WebSocket-based real-time updates, the application enhances usability and scalability while providing a seamless logout feature"
              imgLink={img3}
              />
            <ProjectBox
              title="Ride Go"
              navigateTo="/wip"
              desc=" 
  A comprehensive ride-hailing application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that replicates the functionality of popular platforms like Uber. The app enables users to book rides by entering pickup and drop-off locations with real-time route visualization using Map APIs. Key features include user authentication, fare estimation, real-time driver tracking, and ride status updates. Drivers can manage ride requests, navigate optimized routes, and track their trips. The app leverages Socket.io for real-time communication, ensuring smooth coordination between riders and drivers. This project showcases advanced web and mobile development techniques, integrating secure APIs, scalable architecture, and interactive user interfaces for a seamless ride-booking experience."
              imgLink={rideit}
              />
          <ProjectBox 
            title="Play Mee"
            navigateTo="/pro/"
            desc="A Backend Web App Where user can register and login to do tweet, upload video and can do like, subscribe share, and track history. Developed a scalable RESTful API (CRUD) using Node.js, Express, and MongoDB. Implemented secure JWT authentication, data validation middleware, and conducted thorough endpoint testing to ensure reliability, high performance, and modularity. Handling videos vie a Cloudinary and Multer "
            imgLink={img2}
            description = {data1}
            architecture = "/#"
            model = "https://app.eraser.io/workspace/ZyIsCQwoTNzUUdV8IRAp?origin=share"
            github = "https://github.com/RiteshSharmaop/PlayMee"
            host = 'https://github.com/RiteshSharmaop/PlayMee/blob/master/readme.md'
            />


            <ProjectBox
              title="Music -Ii"
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
