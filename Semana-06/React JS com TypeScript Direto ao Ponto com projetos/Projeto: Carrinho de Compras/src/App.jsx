import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Catalog from './components/Catalog'
import Cart from './components/Cart'
import ThankYouPage from './components/ThankYouPage'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const handleAddCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems((item) => item.id === product.id)
      
      if(itemExists) {
        toast.info(`Quantidade do item ${product.name} atualizada.`)
        return prevItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item) 
      }
      else {
        toast.success(`${product.name} adicionando com sucesso!`)
        return [...prevItems, {...product, quantity}] 
      }
    })
  }

  const handleRemoveFromCart = (product) => {
    toast.error(`${product.name} foi removido com sucesso!`)
    setCartItems((prevItems) => 
    prevItems.filter((item) => item.id !== product.id))
  }

  const handleUpdateCart = (product, quantity) => {
    setCartItems((prevItems) => {
      toast.info(`Quantidade do item ${product.name} atualizada.`)
      return prevItems.map((item) => item.id === product.id ? {...item, quantity: +quantity} : item)
    })
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Catálago</Link>
        <Link to='/cart'>Carrinho</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path='/' element={ <Catalog onAddtoCart={ handleAddCart }/> }></Route>
          <Route path='/cart' element={ 
          <Cart 
          cartItems={ cartItems } 
          onUpdateCart={handleUpdateCart} 
          onRemoveFromCart={handleRemoveFromCart}
          setCartItems={setCartItems}
          onCheckout={() => {
            if(cartItems.length > 0) {
              toast.success('Compra finalizada com sucesso!')
              setCartItems([])
            }
            else { toast.error('Seu carrinho está vazio.') }
          }}/> 
          }></Route>
          <Route path='/thank-you' element={ <ThankYouPage/> }></Route>
        </Routes>
      </div>
      <ToastContainer 
      position='top-center' 
      autoClose={3000} 
      hideProgressBar={false}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover/>
    </BrowserRouter>
  )
}

export default App
