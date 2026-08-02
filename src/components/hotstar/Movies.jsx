import React from 'react'
import { Link } from 'react-router-dom'

export const Movies = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Movies</h1>
        <ul>
          <li>
            <Link to="/watch/dhurnahdar">Dhurandhar</Link>
          </li>
          <li>
            <Link to="/watch/kgf">KGF</Link>
          </li>
          <li>
            <Link to="/watch/12th fail">12th Fail</Link>
          </li>
        </ul>
    </div>
    
  )
}
