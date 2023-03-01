import Photo from "./Photo";
import { Link } from "react-router-dom";

export default function PhotoWall({posts, onRemovePhoto}) {

    console.log(posts)

    return (
        <>
        <Link className="add-button" to="/add-photo" />
        <div className="photoGrid">
            {
                posts
                    .sort((x,y) => y.id - x.id)
                    .map((post,index) => 
                        <Photo
                            key={post.id}
                            post={post}
                            onRemove={onRemovePhoto}
                        />)
            }
        </div>
        </>
    )
}