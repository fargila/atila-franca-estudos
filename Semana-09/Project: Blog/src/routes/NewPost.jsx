import './NewPost.css'
import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = () => 
{
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const navigate = useNavigate()
    
    const createPost = async (e) =>
    {
        e.preventDefault()
        
        const post = {title, body, userId:1}
        await blogFetch.post('/posts', 
        {
            body: post,
        })
        
        navigate('/')
    }

    return (
        <div className='new-post'>
            <h2>Insert new Post:</h2>
            <form onSubmit={(e) => createPost(e)}>
                <div className='form-control'>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name='title' id='title' 
                    placeholder='The title...' onChange={(e) => setTitle(e.target.value)}/>
                </div>
                
                <div className='form-control'>
                    <label htmlFor="body">Content:</label>
                    <textarea type="text" name='body' id='body' 
                    placeholder='The content...' onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
            
                <input type="submit" value='New post' className='btn'/>
            </form>
        </div>
    )
}

export default NewPost
