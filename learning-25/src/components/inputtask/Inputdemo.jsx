import React, { useState } from 'react'

export const Inputdemo = () => {
     const [name,setname] = useState("")
     const [email,setemail] = useState("")

     const nameHandler =(event)=>{
        console.log(event.target.value)
        setname(event.target.value)
     }
  return(
    <div style={{textAlign:"center"}}>
        <h1>Input Demo</h1>
        <div>   
            <label>name</label>
            <input type='text' placeholder='enter email'
            onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>
        <div>
            <label>email</label>
            <input type='text' placeholder='enter email'
            onChange={(event)=>{setemail(event.target.value)}}
            ></input>
            {email}
        </div>
    </div>
    )
}

