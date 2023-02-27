import React from "react";

export default function Photo({post, onRemove}) {
    return (
        <figure className="figure">
            <img
                className="photo"
                src={post.imageLink}
                alt={post.description}
            ></img>
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
                <button className="remove-button" onClick={() => {
                    onRemove(post)
                }}>Remove</button>
            </div>
        </figure>
    )
}