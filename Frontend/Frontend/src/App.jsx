


import Home from "./Components/Home"
import "./App.css"
import NavBar from "./Components/NavBar";
import ParticlesBackground from "./Components/ParticleBackground"
import About from "./Components/About"
import { Outlet } from "react-router-dom";
// import Skills from "./Components/Skills";
// import Skills from "./Components/Skills"



// done

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


