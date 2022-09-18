import React from 'react'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login2 from './pages/Login2'
const App = () => {
  return (
    <div>
 <Header/>
 <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/login2' element={<Login2/>}/>

 </Routes>
    </div>
  )
}

export default App
