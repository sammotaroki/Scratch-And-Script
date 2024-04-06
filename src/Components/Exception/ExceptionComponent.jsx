import React from "react";
import './ExceptionComponent.css';

export function ExceptionComponent({excpTitle, excpMsg, excpClass}) {

    return(
        <>
            <div className={excpClass}>
                <div className="exceptionTitle">
                    <span>
                        {excpTitle} this is my title
                    </span>
                </div>
                <div className="exceptionMessage">
                    <span>
                        {excpMsg} this is my message
                    </span>
                </div>
            </div>
        </>
    )
}