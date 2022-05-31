import React from "react";
import srcImg from "./user-img.png"; 

export function Comment(props){

    return(
        <li className="list-group-item mb-2">
            <div className="commentItem">
                <div className="commentItem-profile">
                    <img src={srcImg} width={80} className="img-fluid" />
                </div>
                <div className="commentItem-detail">
                    <div className="commentItem-detail-username">
                        {props.userName}
                        <div>
                            <span className="commentItem-detail-date">{props.commentDate}</span>
                            <span>{props.commentTime}</span>
                        </div>
                    </div>

                    <div className="commentItem-detail-commentText">
                        {props.commentText}
                    </div>

                </div>
            </div>
        </li>
    )   
}

{/* <div className="row">  
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
</div> */}