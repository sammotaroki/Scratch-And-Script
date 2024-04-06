import React, { useState } from "react";
import './TextInputs.css';

export function TextInputs({elemType, elemName, elemId, elemMin, elemMax}) {
    const [inputText, setInputText] = useState("");

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    return (
        <>
            <div className="inputDiv">
                <input className="textInputs" type={elemType} name={elemName} id={elemId} min={elemMin} max={elemMax}
                onChange={handleChange} value={inputText}/>
            </div>
        </>
    )
}