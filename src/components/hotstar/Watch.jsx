import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {

    //fetch wildcard char data from url:
    //<Route path='/watch/:name' element ={<Watch/>}></Route>
    const name  = useParams().name

    // <Route path='/watch/:id' element ={<Watch/>}></Route>
    //const name  = useParams().id
  return (
    <div style={{textAlign:"center"}}>
        <h1>Watching ...{name} </h1>
    </div>
  )
}
