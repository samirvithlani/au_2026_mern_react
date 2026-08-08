import React, { useState } from 'react'

export const UseStateDemo1 = () => {

    var count =0;
    const[score,setScore]=useState(0)
    //score -->variable...
    //setScore --> function ---> to update state variable we have to use this function
    //useState(0) -->0 is initial value of score..

    const increseCount = ()=>{
        //alert("called...")
        count++;
        console.log("after ++ count = ",count)
    }

    const increseSocre=()=>{
        //score++; --->
        setScore(score+1) //updating score variable..
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo1</h1>
        <button onClick={increseCount}>CLICK</button>
        <button onClick={increseSocre}>increse</button>
        {/* <button onClick={()=>{increseCount(10)}}>click 1</button> */}
        <h1>Count = {count}</h1>
        <h1>Score = {score}</h1>
    </div>
  )
}
