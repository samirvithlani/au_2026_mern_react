import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {Header} from "./components/Header"
import { Footer } from './components/Footer'
import { Content } from './components/Content'

function App() {
  
//at a time we can return only 1 html tag
//whatever written in return statement will be display on browser
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default App
