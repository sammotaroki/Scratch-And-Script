import React from "react";
import './ButtonInputs.css';

export function ButtonInput({elemId, elemClass, elemValue, elemType}) {
    return (
        <>
            <div>
                <button id={elemId} className={elemClass} type={elemType}>{elemValue}</button>
            </div>
        </>
    )
}
