import React from 'react';
import {Comment} from "../comment";
import "../../css/comment.css";

export function CommentList(props){

    return (
        <ul className="list-group commentList">
        {
            props.comments.map((item, index)=>{
                return <Comment {...item} key={index}/>
            })
        }
        </ul>
    )
}