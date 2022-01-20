import React from "react";

const CrewBtns = ({setTiming, id, name, value}) => {
    return (
        <button key={id} className={`page-btn ${name === value.name?"page-highlight":""}`} onClick={()=> {
            setTiming(id);
        }}></button>
    )
}

export default CrewBtns;