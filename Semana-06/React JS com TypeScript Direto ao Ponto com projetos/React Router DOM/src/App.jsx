import './App.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Settings from './components/Settings'
import TaskDetails from './components/TaskDetails'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
    <nav>
      <ul>
        <li><Link to={'/home'}>Inicio</Link></li>
        <li><Link to={'/about'}>Sobre</Link></li>
        <li><Link to={'/contact'}>Contato</Link></li>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
        {/* navlink -> vai sinalizadar quando o usuário estiver na página do mesmo.*/}
        <li>
          <NavLink className={({isActive}) => (isActive ? "active-link" : "")} to={'/home'}>xxx</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? "active-link" : "")} to={'/login'}>Login</NavLink>
        </li>
      </ul>

      <div>
        <h2>Tarefas</h2>
        <Link to={'/tasks/1'}>Tarefa 1</Link>
        <Link to={'/tasks/2'}>Tarefa 2</Link>
        <Link to={'/tasks/3'}>Tarefa 3</Link>
      </div>

      <div>
        <h2>Itens</h2>
        <Link to={'/items/1'}>Item1</Link>
      </div>
    </nav>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contacts/>}/>

        {/* useNavigate */}
        <Route path="/login" element={<Login/>}/>

        <Route path='dashboard' element={<Dashboard/>}>
          <Route path='profile' element={<Profile/>}/>
          <Route path='settings' element={<Settings/>}/>
        </Route>

        <Route path='/tasks/:taskId' element={<TaskDetails/>}/>

        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </>
  )
}

export default App
