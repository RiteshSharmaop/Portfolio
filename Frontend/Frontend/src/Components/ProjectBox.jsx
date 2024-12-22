import React from "react";
import { useNavigate } from "react-router-dom";
function ProjectBox(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.navigateTo); // Navigate to the specified page
    };
    return (
        <>
            <div onClick={handleClick}>
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
