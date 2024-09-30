import './App.css'
import AxiosApi from './components/AxiosAPI'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => 
  {

  return (
    <div>
      <h1>Piaditas</h1>
      <AxiosApi/>
      <ToastContainer />
    </div>
  )
}

export default App
