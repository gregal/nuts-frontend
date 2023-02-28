import Photo from "./Photo";
import { Link } from "react-router-dom";

export default function PhotoWall({posts, onRemovePhoto}) {

    return (
        <>
        <Link className="add-button" to="/add-photo" />
        <div className="photoGrid">
            {
                posts.map((post,index) => 
                    <Photo
                        key={index}
                        post={post}
                        onRemove={onRemovePhoto}
                    />)
            }
        </div>
        </>
    )
}