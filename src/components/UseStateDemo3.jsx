import React, { useState } from 'react'

export const UseStateDemo3 = () => {
    const[marks,setMarks]=useState([1,2,3])

    const genMarks = ()=>{
        //random gen...
        const randomMark = Math.floor(Math.random()*10);
        setMarks([...marks,randomMark])
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo3</h1>
        {
            marks.map((m)=>{
                return <li>{m}</li>
            })
        }

        <button onClick={genMarks}>GEN MARKS</button>
    </div>
  )
}
