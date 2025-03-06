import React from 'react'

export const ArrayDemo = () => {
    var users = ["ram","shyam","amit","sumit"]
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{textAlign:"center"}}>Array Demo</h1>
        {
            users.map((user)=>{
                return<li>{user}</li>
            })
        }
    </div>
  )
}
