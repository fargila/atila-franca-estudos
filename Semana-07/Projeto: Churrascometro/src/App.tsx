import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calculadora from './pages/Calculadora'
import Resultado from './pages/Resultado'

function App() {


  return (
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Calculadora/>}></Route>
        <Route path='/resultado' element={<Resultado/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
