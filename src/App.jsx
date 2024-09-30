import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify'
function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Log' element={<Login/>}></Route>
      <Route path='/Reg' element={<Register/>}></Route>

     </Routes>
     <Footer/>
     <ToastContainer/>
    </>
  )
}

export default App
