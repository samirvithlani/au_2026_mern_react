import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const[loading,setLoading]=useState(true)

    const stopLoader = ()=>{
        //loading = false
        if(loading==true){
            setLoading(false)
        }else{
            setLoading(true)
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 2</h1>
        {
            loading == true && <h1>Loading...</h1>
        }
        <button onClick={stopLoader}>{loading==true?"STOP":"START"}</button>
        
    </div>
  )
}
