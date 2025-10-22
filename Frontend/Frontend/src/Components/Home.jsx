import React from 'react'
import SocialButtons from './SocialButtons'

export default function Home() {
    return (
        <>
            <div>

            <section className="home" id="home">

                <h3>HI THERE !</h3>
                <h1>I'M <span>ritesh sharma</span></h1>
                <p>a final-year CSE student passionate about Compititive Programming, full-stack development, system design, and Data structures and Algorithm. I enjoy building scalable apps, solving competitive programming challenges and solving & fixing bugs.

                </p>
                <a href="/about"><button className="btn">about me <i className="fas fa-user"></i></button></a>
                
            <SocialButtons className = "socialss"/>
            </section>
            </div>
        </>
    )
}
