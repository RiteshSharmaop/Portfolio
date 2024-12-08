import React from 'react'
import img from "../Images/pic.jpg"
import SmoothScroll from './SmoothScrolling'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            <div>

            <header>

                <div className="user">
                    <img src={img} alt="Rietsh Image" />
                        <h3 className="name">Ritesh Sharma</h3>
                        <p className="post">Student</p>
                </div>

                <nav className="navbar">
                    <ul>

                        <li><Link to="/">home</Link></li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/skill">my skills</Link></li>
                        <li><Link to="/projects">projects</Link></li>
                        <li><Link to="/education">education</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                </nav>

            </header>
            </div>
        </>
    )
}
