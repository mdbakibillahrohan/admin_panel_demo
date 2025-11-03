import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router'
import OrderPage from './pages/OrderPage'
import ProductPage from './pages/ProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>App</h2>
      <Link to="product"><button>Product Page</button></Link>
      <Link to="order"><button>Order Page</button></Link>
      <Routes>
        <Route path='order' element={<OrderPage/>} />
        <Route path='product/*' element={<ProductPage/>} />
      </Routes>

    </>

  )
}

export default App
