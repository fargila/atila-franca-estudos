import { useState, useEffect } from 'react'
import axios from 'axios'

const InfiniteScroll = () => {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [hasMoreData, setHasMoreData] = useState(true)

    const fetchPosts = async () =>
    {
        if(isLoading) { return }
        setIsLoading(true)

        try
        { 
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
        
            if(response.data.length > 0)
            { setPosts((prevPosts) => [...prevPosts, ...response.data]) }
            else { setHasMoreData(false) }
        }
        catch (error) { console.log(error) }
        finally { setIsLoading(false) }
    }

    useEffect(() => 
    {
        fetchPosts()
    }, [page])

    useEffect(() =>
    {
        const throttleHandleScroll = throttle(handleScroll, 150)
        window.addEventListener('scroll', throttleHandleScroll)

        return () => { window.removeEventListener('scroll', throttleHandleScroll) }
    }, [hasMoreData, isLoading])

    const handleScroll = () =>
    {
        if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
        !isLoading && hasMoreData)
        { setPage((prevPage) => prevPage + 1) }
    }

    return (
    <div>
        <h1>Infinite Scroll</h1>
        <ul>
            {posts.map((post) => 
            (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
        {isLoading && <p>Loading more posts...</p>}
    </div>
    )
}

function throttle (func, delay)
{
    let lastCall = 0

    return function(...args) 
    {
        const now = new Date().getTime()
        if(now - lastCall < delay) { return }
        lastCall = now
        
        return func(...args)
    }
}

export default InfiniteScroll
