import React from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom";

export default function PhotoWall(props) {
    return (
        <>
        <Link className="add-button" to="/add-photo" />
        <div className="photoGrid">
            {
                props.posts.map((post,index) => 
                    <Photo
                        key={index}
                        post={post}
                        onRemove={props.onRemovePhoto}
                    />)
            }
        </div>
        </>
    )
}