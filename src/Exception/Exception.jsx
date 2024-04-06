import { Component, useEffect, useState } from "react";
import { ExceptionComponent } from "../Components/Exception/ExceptionComponent";


export function Exception({excpData}) {

    if (excpData.showExcep) {
        const timeout = setTimeout(() => excpData.showExcep = false , 4000);
    return (<>
    
        <div>
            <ExceptionComponent excpClass={excpData.excpClass} excpTitle={excpData.excpTitle} excpMsg={excpData.excpMessage}/>
        </div>
    </>);
    }
}