import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import FetchPosts from './components/FetchPosts'
import AxiosPosts from './components/AxiosPosts'
import PostManager from './components/PostManager'
import PostLoader from './components/PostLoader'
import PostViewer from './components/PostViewer'

function App() {

  return (
    <BrowserRouter>
      <h1>GET com Fetch e Axios</h1>
      <div>
        <Link to="/fetch-posts">Fetch Posts</Link>
        <Link to="/axios-posts">Axios Posts</Link>
      </div>
      <div>
        <Link to='/posts'>Gerenciar posts</Link>
      </div>
      <div>
        <Link to='/post/1'>Carregar Post 1</Link>
      </div>
      <div>
        <Link to='/post/999'>Carregar Post 999</Link>
      </div>
      <div>
        <Link to='/post/view/2'>Carregar Post 2</Link>
      </div>
      <Routes>
        <Route path="fetch-posts" element={<FetchPosts/>}/>
        <Route path="axios-posts" element={<AxiosPosts/>}/>

        <Route path='/posts' element={<PostManager/>}/>

        <Route path='/post/:postId' element={<PostLoader/>}/>
        <Route path='/post/view/:postId' element={<PostViewer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
