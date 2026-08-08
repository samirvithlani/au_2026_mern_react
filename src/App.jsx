import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {Header} from "./components/Header"
import { Footer } from './components/Footer'
import { Content } from './components/Content'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { Route, Routes } from 'react-router-dom'
import { Movies } from './components/hotstar/Movies'
import { Shows } from './components/hotstar/Shows'
import { Navbar } from './components/Navbar'
import { Home } from './components/hotstar/Home'
import { Error404 } from './components/Error404'
import { Watch } from './components/hotstar/Watch'
import { UseStateDemo1 } from './components/UseStateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'

function App() {
  
//at a time we can return only 1 html tag
//whatever written in return statement will be display on browser
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/movies' element ={<Movies/>}></Route>
        <Route path='/shows' element ={<Shows/>}></Route>
        <Route path='/' element ={<Home/>}></Route>
        {/* <Route path='/watch' element ={<Watch/>}></Route> */}
        <Route path='/watch/:name' element ={<Watch/>}></Route>
        <Route path='/usestatedemo1' element ={<UseStateDemo1/>}></Route>
        <Route path='/usestatedemo2' element ={<UseStateDemo2/>}></Route>
        <Route path='/*' element ={<Error404/>}></Route>
      </Routes>
    </div>
  )
}

export default App
