import { Route, Routes } from 'react-router'
import './App.css'
import MainLayout from './layouts/main-layout'
import AuthLayout from './layouts/auth-layout'


function App() {

  return (
    <>
    <Routes>
      <Route path='*' Component={MainLayout} />
      <Route path='auth/*' Component={AuthLayout} />
    </Routes>
    </>

  )
}

export default App
