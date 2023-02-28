import { useNavigate } from "react-router-dom"

function AddPhoto(props) {

    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        const formElements = event.target.elements
        const link = formElements.link.value
        const description = formElements.description.value

        if (link && description) {
            
            const post = {
                id: 0,
                imageLink: link,
                description: description
            }

            props.onAddPhoto(post)
        }

        navigate('/')
    }

    return (
        <>
        <h1>Add a photo</h1>
        <div className='add-form'>
            <form onSubmit={handleSubmit}>
                <input name='link' type='text' placeholder='Link'/>
                <input name='description' type='text' placeholder='Description'/>
                <button>Post</button>
            </form>
        </div>
        </> 
    )

}

export default AddPhoto