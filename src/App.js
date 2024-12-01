import React, { useEffect } from 'react'
import Navbar from "./components/Navbar"
import Home from './components/Home/Home'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import SignUp from './components/Signup/SignUp'
import Login from './components/Login/Login'
import Todo from "./components/todo/Todo"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useDispatch } from "react-redux";
import { authActions } from "./store";




const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
 const id=sessionStorage.getItem("id")
 if(id){
  dispatch(authActions.login())
 }
 
 
  },[])
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/ab' element={<About/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/todo' element={<Todo/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
