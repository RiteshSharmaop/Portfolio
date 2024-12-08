
// import Home from "./Components/Home"
// import "./App.css"
// import NavBar from "./Components/NavBar";
// import ParticlesBackground from "./Components/ParticleBackground"
// import About from "./Components/About"
// // import Skills from "./Components/Skills"




// function App() {
//   return (
//     <div>
//       <NavBar />
//       <ParticlesBackground />
//       <Home />
//       <About />
//       {/* <Skills /> */}

//     </div>
//   );
// }

// export default App;



import Home from "./Components/Home"
import "./App.css"
import NavBar from "./Components/NavBar";
import ParticlesBackground from "./Components/ParticleBackground"
import About from "./Components/About"
import { Outlet } from "react-router-dom";
// import Skills from "./Components/Skills";
// import Skills from "./Components/Skills"




function App() {
  return (
    <div>
      <NavBar />
      <ParticlesBackground />
      <Outlet />
      
    </div>
  );
}

export default App;

