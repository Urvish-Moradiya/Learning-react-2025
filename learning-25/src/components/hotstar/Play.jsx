import React from 'react'
import { useParams } from 'react-router-dom'

export const Play = () => {
    const id = useParams().id
  return (
    
    <div><h1 style={{textAlign:"center", color:"white"}}>Playing.....{id}</h1></div>
  )
}
