import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

import Education from "./Components/Education"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "skill",
        element: <Skills />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "Education",
        element: <Education />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
