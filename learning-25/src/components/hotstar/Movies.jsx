import React from 'react'
import { Link } from 'react-router-dom'

export const Movies = () => {
  return (
    <div style={{textAlign:"center", color:"white"}}>
        <h1>Movies</h1>
        <ul>
          <li><Link to="/play/moneyheist"> Money Heist</Link></li>
          <li><Link to="/play/10000">India-ENG ODI</Link></li>
          <li><Link to="/play/">ok</Link></li>
        </ul>
    </div>
  )
}
