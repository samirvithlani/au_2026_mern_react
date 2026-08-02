import React from 'react'
import { Link } from 'react-router-dom'

export const Shows = () => {
  const showList = [
    {id:1,name:"money heist"},
    {id:2,name:"breaking BAD"},
    {id:3,name:"squid game"}
  ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Shows</h1>
        {
          showList.map((show)=>{
            return <li>
              <Link to ={`/watch/${show.name}`}>{show.name}</Link>
            </li>
          })
        }
    </div>
  )
}
