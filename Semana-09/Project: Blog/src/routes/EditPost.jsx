import blogFetch from '../axios/config'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = () => 
{
    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const {id} = useParams()
    //const navigate = useNavigate()

    const getPost = async() =>
    {
        try
        {
            const response = await blogFetch.get(`/posts/${id}`)
            const data = response.data

            setTitle(data.title)
            setBody(data.body)
        }
        catch (error)
        { console.log(error) }
    }

    const editPost = async(e) =>
    {
        e.preventDefault()

        const post = {title, body, userId: 1}
        await blogFetch.put(`/posts/${id}`,
        {
            body: post,
        })
    }
    
    useEffect(() =>
    { getPost() }, [])

  return (
    <div className='new-post'>
            <h2>Editing Post:{title}</h2>
            <form onSubmit={(e) => editPost(e)}>
                <div className='form-control'>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name='title' id='title' value={title || ''}
                    placeholder='The title...' onChange={(e) => setTitle(e.target.value)}/>
                </div>
                
                <div className='form-control'>
                    <label htmlFor="body">Content:</label>
                    <textarea type="text" name='body' id='body' value={body || ''}
                    placeholder='The content...' onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
            
                <input type="submit" value='Edit post' className='btn'/>
            </form>
        </div>
  )
}

export default EditPost
