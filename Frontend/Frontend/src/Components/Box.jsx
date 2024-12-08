import React from "react";
function Box(props) {
    return (
        <>
            <div className="ox">
                <span>{props.tit}</span>
                <h3>{props.prof}</h3>
            </div>
        </>
    );
}

export default Box;
