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

function App() {
  
//at a time we can return only 1 html tag
//whatever written in return statement will be display on browser
  return (
    <div>
      <Header></Header>
      {/* <MapDemo2></MapDemo2> */}
      <MapDemo3></MapDemo3>
      {/* <MapDemo1></MapDemo1> */}
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
