import React from "react";
function ProjectBox(props) {
    return (
        <>
            <div>
                <h2 className="box-text">{props.title}</h2>

                <h3 className="box-inner">{props.desc}</h3>
                <div className="box ">

                    <img src={props.imgLink} alt=""/>
                </div>
            </div>
        </>
    );
}

export default ProjectBox;
