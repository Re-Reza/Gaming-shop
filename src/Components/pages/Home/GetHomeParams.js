import React from "react";
import {Home} from "./Home";
import { useParams } from "react-router";

export function GetHomeParams(){

    const params = useParams()

    return(
        <Home params={params.category} />
    )
}
