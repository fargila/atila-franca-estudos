import { useState, useEffect } from 'react'
import axios from 'axios' 
import PostForm from './PostForm'

const PostManager = () => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')

    const [selectedPost, setSelectedPost] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    const handleSuccess = (post, operation) => {
        if(operation === 'add') {
            setPosts((currentPosts) => [post, ...currentPosts])
        }
        else if(operation === 'update') {
            setPosts((currentPosts) => currentPosts.map((p) => p.id === post.id ? post : p))
        }
        else if(operation === 'delete') {
            setPosts((currentPosts) => currentPosts.filter((p) => (p.id !== post.id)))
            setSelectedPost(null)
        }
        setIsEditing(false)
    }

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
          setPosts(response.data.slice(0, 5))
        } 
        catch (error) {
          setError(error.message)
        }
      }

      fetchPosts()
    }, [])

    const handleEdit = (post) => {
        setSelectedPost(post)
        setIsEditing(true)
    }

    const handleCancelEdit = (post) => {
        setSelectedPost(null)
        setIsEditing(false)
    }

  return (
    <div>
      <h1>Gerenciar posts</h1>
      <PostForm post={isEditing ? selectedPost : null} onSuccess={handleSuccess}/>
      {isEditing && <buttom onClick={handleCancelEdit}>Cancelar edição</buttom>}
      { error ? (<p>Erro: { error }</p>)
        : (posts.map((post)=> (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => handleEdit(post)}>Editar</button>
        </div>
      )))}
    </div>
  )
}

export default PostManager
