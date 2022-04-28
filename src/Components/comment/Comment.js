import React from "react";
import srcImg from "./user-img.png"; 

export function Comment(props){

    console.log(props)
    return(
        <li className="list-group-item mb-2">
            <div className="row">  
                <div className="row">
                    <div className="col-3">
                        <img src={srcImg} width={50} className="img-fluid" />
                    </div>
                    <div className="col-3">
                        {props.userName}
                    </div>
                </div>

                <div className="row">
                    <div className="col-10">
                        {props.commentText}
                    </div>
                    <div className="col-2">
                        {props.commentDate}
                        {props.commentTime}
                    </div>

                </div>
            </div>
        </li>
    )   
}