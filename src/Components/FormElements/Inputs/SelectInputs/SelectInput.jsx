import React, { useState } from "react";
import "./SelectInputs.css";

export function SelectInputs({elemName, elemId, optionData, sendValueToParent, optionsState}) {
    const [inputText, setInputText] = useState("");

    // console.log(`Option Data: ${optionData}`);

    const handleChange = (e) => {
        setInputText(e.target.value);

        if(elemId === "selCountry1" || elemId === "selCountry2") {
            sendValueToParent(e.target.value);
        }
    }

    return (
        <>
            <div className="selectInputDiv">

                <select className="selectInput" name={elemName} id={elemId} onChange={handleChange}>
                    <option value={0} selected={optionsState == 0}>Select an option</option>
                    {
                        optionData.map((opt) => {
                            return (
                                <option key={opt.id} value={opt.id} selected={optionsState == opt.id}>{opt.value}</option>
                            )
                        })
                    
                    }
                </select>
            </div>
        </>
    )
}