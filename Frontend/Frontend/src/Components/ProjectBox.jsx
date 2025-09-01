import React from "react";
import { useNavigate } from "react-router-dom";
import multillmprofile from "../Images/multillmcover.svg"
function ProjectBox(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/pro" , { 
            state: { 
                title: props.title,
                img: props.imgLink , 
                description: props.description,
                github: props.github,
                page: props.host,
                model: props.model,
                architecture: props.architecture
            } }); // Navigate to the specified page
    };
    return (
        <>
            <div onClick={handleClick} className="navigateTo">
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
