import React from 'react'

export const ArrayDemo2 = () => {
    var students = [
        {
            name:"urvish",
            age : 21,
            marks : 70  
        },
        {
            name:"vatsal",
            age : 22,
            marks : 60  
        },
        {
            name:"visaj",
            age : 26,
            marks : 50  
        },
        {
            name:"prince",
            age : 20,
            marks : 40  
        },
    ]
  return (
    <div style={{ textAlign:"center"}}>
        <h1  style={{color: "red"}}>Array Demo 2</h1>
        {
            students.map((stu)=>{
                return<div>
                    <h2>Name = {stu.name}</h2>
                    <h2>Age = {stu.age}</h2>
                    <h2>Marks = {stu.marks}</h2>
                    </div>

            })
        }
    </div>
  )
}
