import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const formElements = event.target.elements
        const link = formElements.link
        const description = formElements.description

        if (link && description) {
            
            const post = {
                id: 0,
                imageLink: link,
                description: description
            }

            this.props.onAddPhoto(post)
        }
    }

    render () {
        return (
            <>
            <h1>Add a photo</h1>
            <div className='add-form'>
                <form onSubmit={this.handleSubmit}>
                    <input name='link' type='text' placeholder='Link'/>
                    <input name='description' type='text' placeholder='Description'/>
                    <button>Post</button>
                </form>
            </div>
            </> 
        )
    }

}

export default AddPhoto