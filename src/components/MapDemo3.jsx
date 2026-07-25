import React from 'react'

export const MapDemo3 = () => {
     var users = [
        {id:1,name:"raj",age:23,status:true},
        {id:2,name:"parth",age:25,status:true},
        {id:3,name:"jay",age:45,status:false},
        {id:4,name:"kunal",age:28,status:true},
    ]
  return (
    <div>
        <h1>MAP DEMO 3</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((u)=>{
                        return <tr>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.age}</td>
                            <td>{u.status==true?"Active":"NOt active"}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
