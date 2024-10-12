import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
      <Link to={'/'}><h2>Blog</h2></Link>
        <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/new'} className='new-btn'>New Post</Link></li>
        <li><Link to={'/admin'} className=''>Manage</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
