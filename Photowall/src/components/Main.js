import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
  
class Main extends Component {
    constructor(posts) {
        super(posts)
        this.state = {
            posts: []
        }
        this.addPhoto = this.addPhoto.bind(this);
        this.removePhoto = this.removePhoto.bind(this);
        this.navigate = useNavigate()
    }
    
    addPhoto(submittedPost) {
        console.log(submittedPost)
        this.setState((state) => ({
            posts: state.posts.concat(submittedPost)
        }))
    }
    
    removePhoto(removedPost) {
        console.log(removedPost)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== removedPost)
        }))
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <>
                        <Title value="Photowall" />
                        <PhotoWall
                            posts={this.state.posts}
                            onRemovePhoto={this.removePhoto}
                            />
                        </>
                    }/>
                    <Route path='/add-photo' element={
                        <AddPhoto onAddPhoto={this.addPhoto}/>
                    }/>
                </Routes>
            </BrowserRouter>
        )
    }

    componentDidMount() {
        const data = this.props.fetchPosts()
        this.setState({ posts: data })
    }
}

export default Main