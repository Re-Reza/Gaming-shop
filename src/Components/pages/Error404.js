import React, {useEffect} from "react";

export function Error404(){

    useEffect(()=>{
        document.title = "404";
    }, []);

    return(
        <div></div>
    )
}