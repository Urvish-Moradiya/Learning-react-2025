import axios from 'axios'
import React from 'react'

export const Postdemo1 = () => {
    const postdata = async()=>{
         var userobject = {
            name:"urvish",
            age:21,
            email:"urvish@gmail.com",
            isActive:true
         }

         const res = await axios.post("https://node5.onrender.com/user/user",userobject)
         console.log(res)
         console.log(res.status)
         console.log(res.data)

         if(res.status == 201){
            alert("user created successfully")
         }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Post Data</h1>
        <button onClick={()=>{postdata()}}>Add data</button>
        </div>
  )
}
