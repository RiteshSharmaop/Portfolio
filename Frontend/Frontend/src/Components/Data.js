export const playMee = `<div class="boxer">
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

export const brainMesh = `<div class="boxer">
  <h1 style="color: #F89F1B;">🚀 Brain Mesh Chat Platform</h1>
  <p>A web application that allows users to interact with multiple Large Language Models (LLMs) simultaneously.  
  The platform provides <strong>free LLM responses</strong> as well as a <strong>paid Multi-LLM feature</strong>, which consolidates responses from all available LLMs into one concise summary using OpenAI GPT.</p>
  <br>

  <h2 style="color: #F89F1B;">📌 Overview</h2>
  <p>Brain Mesh Chat Platform integrates <strong>Stripe</strong> for secure payments and uses <strong>MongoDB</strong> for persistent storage.  
  Redis caching will be added later for payment/session optimization.</p>
  <br>

  <h2 style="color: #F89F1B;">🛠️ Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> ReactJS (in /frontend)</li>
    <li><strong>Backend:</strong> Node.js, Express.js (in /backend)</li>
    <li><strong>Database:</strong> MongoDB (Redis planned for caching)</li>
    <li><strong>Payment Gateway:</strong> Stripe API</li>
    <li><strong>Authentication:</strong> JWT + Cookies</li>
  </ul>
  <br>

  <h2 style="color: #F89F1B;">✨ Key Features</h2>
  <ul>
    <li><strong>User Authentication:</strong> Signup, login, secure token-based auth, session management</li>
    <li><strong>Multiple LLMs:</strong> Chat with GPT, Gemini, Deepseek, Perplexity, Lama, DeepSeek</li>
    <li><strong>Multi-LLM Pro:</strong> Paid feature that merges multiple LLM responses into a concise summary</li>
    <li><strong>Payment:</strong> Stripe integration for subscriptions (card/net-banking/UPI)</li>
    <li><strong>Role-based Access:</strong> Free users access standard LLMs; paid users unlock Multi-LLM</li>
    <li><strong>Session Persistence:</strong> Store users, chat history, and subscription status</li>
  </ul>
  <br>
  <h2 style="color: #F89F1B;">🛠️ Technologies Used</h2>
    <ul>
    <li><strong>React.js:</strong> Frontend library for building user interfaces.</li>
    <li><strong>Node.js:</strong> Backend API server.</li>
    <li><strong>Express.js:</strong> Web framework for routing.</li>
    <li><strong>MongoDB:</strong> Database for user, video, tweet, comment, and subscription data.</li>
    <li><strong>openRouter API:</strong> llm Api.</li>
    <li><strong>Stripe:</strong> Payment Gateway.</li>
    <li><strong>JWT Authentication:</strong> Secure access to user routes.</li>
    <li><strong>Multer:</strong> Handling file uploads (avatars, cover images, videos, thumbnails).</li>
    <li><strong>Cloudinary:</strong> Cloud-based platform for uploading photos and videos.</li>
    <li><strong>Postman:</strong> Api Testing.</li>
    </ul>
  <br>

  <h2 style="color: #F89F1B;">📂 Folder Structure</h2>
  <pre>
.
├── frontend/               
│   ├── src/                
│      ├── Components/   # All UI
│          ├── Chat/     # Chat UI 
│          ├── Layout/   # Layout UI
│          ├── Payment/  # Payment UI
│      ├── context       # Context API
│      ├── Pages         # All pages
│      ├── App.jsx       # API route definitions
├── backend/
│   ├── routes/          # API routes
│   ├── controller/      # Business logic
│   ├── models/          # MongoDB models
│   ├── middleware/      # Auth middleware
│   ├── db/              # DB connection
│   └── app.js           # Express entry point
  </pre>
  <br>

  <h2 style="color: #F89F1B;">⚙️ Installation & Setup</h2>
  <h3 style="color: #F89F1B;">🔹 Backend</h3>
  <ol>
    <li>Clone repo: <code>git clone https://github.com/RiteshSharmaop/BrainMash</code></li>
    <li>Go to backend: <code>cd Backend</code></li>
    <li>Install deps: <code>npm install</code></li>
    <li>Configure <code>.env</code> with MongoDB, JWT, Stripe, OpenRouter keys</li>
    <li>Run backend: <code>npm run dev</code> → runs on <code>http://localhost:8000</code></li>
  </ol>
  <br>

  <h3 style="color: #F89F1B;">🔹 Frontend</h3>
  <ol>
    <li>Go to frontend: <code>cd ../Frontend</code></li>
    <li>Install deps: <code>npm install</code></li>
    <li>Run dev server: <code>npm run dev</code> → runs on <code>http://localhost:5173</code></li>
    <li>Set <code>.env</code> → <code>VITE_BACKEND_URL</code> & <code>VITE_PUBLISHABLE_KEY</code></li>
  </ol>
  <br>

  <h2 style="color: #F89F1B;">🔑 User Flow</h2>
  <ul>
    <li>Register/Login → access chat</li>
    <li>Free users → access individual LLMs</li>
    <li>Paid users → unlock Multi-LLM summary</li>
    <li>Stripe securely handles payments</li>
  </ul>
  <br>

  <h2 style="color: #F89F1B;">📡 API Endpoints</h2>
  <h3 style="color: #F89F1B;">👤 User APIs</h3>
  <ul>
    <li>POST /register → Register user</li>
    <li>POST /login → Login user</li>
    <li>GET /me → Current profile</li>
    <li>GET /logout → Logout user</li>
  </ul>
  <h3 style="color: #F89F1B;">💬 Chat APIs</h3>
  <ul>
    <li>POST / → Send prompt → get responses from multiple LLMs</li>
    <li>POST /multi → Merge responses into single summary</li>
  </ul>
  <h3 style="color: #F89F1B;">💳 Payment APIs</h3>
  <ul>
    <li>POST /create-checkout-session → Create Stripe checkout session</li>
  </ul>
  <br>

  <h2 style="color: #F89F1B;">🗄️ Database</h2>
  <ul>
    <li><strong>MongoDB:</strong> Store users, credentials, chats, subscriptions</li>
    <li><strong>Redis (planned):</strong> Cache payment/session for faster access</li>
  </ul>
  <br>

  <h2 style="color: #F89F1B;">🔮 Future Enhancements</h2>
  <ul>
    <li>Redis integration for caching</li>
    <li>Forgot/reset password functionality</li>
    <li>Admin dashboard for monitoring</li>
    <li>More payment providers support</li>
  </ul>
  <br>

  <h2 style="color: #F89F1B;">🌍 Community & Contribution</h2>
  <p>Brain Mesh fosters collaboration between developers and AI enthusiasts.  
  Contributions are welcome:</p>
  <ol>
    <li>Fork the repo</li>
    <li>Create a feature branch</li>
    <li>Commit & push changes</li>
    <li>Open a PR</li>
  </ol>

  <p><strong>License:</strong> MIT © 2025 Ritesh Sharma</p>
</div>
`