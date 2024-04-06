import React from "react";
import "./Label.css";


export function Label({labelId, labelName}) {
    return (
        <>
            <div className="labelDiv">
                <label htmlFor={labelId}>{labelName}</label>
            </div>
        </>
    )
}

