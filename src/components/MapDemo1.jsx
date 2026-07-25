import React from 'react'

export const MapDemo1 = () => {
    var users = ["raj","parth","amit","sumit","neha","sneha"]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo1</h1>
        {
            users.map((u)=>{
                return <li>{u}</li>
            })
        }
    </div>
  )
}
