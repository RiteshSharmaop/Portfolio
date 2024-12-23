import React from 'react'
import SocialButtons from './SocialButtons'

export default function Home() {
    return (
        <>
            <div>

            <section className="home" id="home">

                <h3>HI THERE !</h3>
                <h1>I'M <span>ritesh sharma</span></h1>
                <p>i am persuing 4years of B.tech from Lakshmi narain college of technology.

                </p>
                <a href="/about"><button className="btn">about me <i className="fas fa-user"></i></button></a>
                
            <SocialButtons className = "socialss"/>
            </section>
            </div>
        </>
    )
}
