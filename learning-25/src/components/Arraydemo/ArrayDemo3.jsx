import React from 'react'

export const ArrayDemo3 = () => {
    var employees = [
        {
            id : 1,
            name:"urvish",
            age : 21,
            salary : 20000,
            gender : "male" 
        },
        {
            id : 2,
            name:"devanshi",
            age : 22,
            salary : 20000,
            gender : "female" 
        },
        {
            id : 3,
            name:"vatsal",
            age : 26,     
            salary : 20000,
            gender : "male"  
        },
        {
            id : 4,
            name:"aarya",
            age : 20,
            salary : 20000,
            gender : "female"  
        },
    ]
  return (
    <div>
    <div style={{textAlign:"center"}}>ArrayDemo3</div>
    <table className="table table-dark">
      <thead>
          <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>salary</th>
              <th>gender</th>
          </tr>
      </thead>
      <tbody>
          {employees.map((emp)=>(
              <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.gender}</td>

              </tr>
          ))}
      </tbody>
  </table>
  </div>
  )}
