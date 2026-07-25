import React from 'react'

export const MapDemo2 = () => {
    var users = [
        {id:1,name:"raj",age:23,status:true},
        {id:2,name:"parth",age:25,status:true},
        {id:3,name:"jay",age:45,status:false},
        {id:4,name:"kunal",age:28,status:true},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo2</h1>
        {
            users.map((u)=>{
                return <li>{u.id} {u.name} {u.age} {u.status==true?"active":"not active"}</li>
            })
        }
    </div>
  )
}
