import React from "react";

export default function About() {
    return (
        <>
            <div>

            <section className="about" id="about">

                <h1 className="heading"> <span>about</span> me </h1>

                <div className="row">

                    <div className="info">
                        <h3> <span> name : </span> ritesh sharma </h3>
                        <h3> <span> age : </span> 21 </h3>
                        <h3> <span> qualification : </span> B.tech </h3>
                        <h3> <span> post : </span> student </h3>
                        <h3> <span> language : </span> hindi / english </h3>
                        <a href="#"><button className="btn"> download CV <i className="fas fa-download"></i> </button></a>
                    </div>

                     <div className="counter">

                       <div className="box">
                            <span>5th</span>
                            <h3>Semester</h3>
                        </div>

                         <div className="box">
                            <span>CSE</span>
                            <h3>computer science and enginnering</h3>
                        </div>

                        <div className="box">
                            <span>B.tech</span>
                            <h3>( present )</h3>
                        </div>

                        <div className="box">
                            <span>2022-26</span>
                            <h3>( batch )</h3>
                        </div>

                    </div>  

                </div>

            </section>
            </div>
        </>
    );
}
