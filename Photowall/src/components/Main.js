import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { useEffect, useState } from 'react';
  
function Main({fetchPosts}) {
    
    const [posts, setPosts] = useState([]);

    function addPhoto(submittedPost) {
        console.log(submittedPost)
        setPosts(posts.concat(submittedPost))
    }
    
    function removePhoto(removedPost) {
        console.log(removedPost)
        setPosts(posts.filter(post => post !== removedPost))
    }

    useEffect(() => {
        const data = fetchPosts()
        setPosts(data)
    }, [fetchPosts])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <>
                    <Title value="Photowall" />
                    <PhotoWall
                        posts={posts}
                        onRemovePhoto={removePhoto}
                        />
                    </>
                }/>
                <Route path='/add-photo' element={
                    <AddPhoto onAddPhoto={addPhoto}/>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Main