import React from 'react'

export const ArrayDemo4 = () => {
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
            salary : 12000,
            gender : "female" 
        },
        {
            id : 3,
            name:"vatsal",
            age : 26,     
            salary : 12000,
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
    <div style={{textAlign:"center"}}>ArrayDemo4</div>
    <table className="table table-dark">
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>salary</th>
                <th>sex</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((emp)=>{
                return(
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>
                            <span style={{color:emp.name.startsWith("s")?"red":"white"}}>
                                {emp.name}
                            </span>
                        </td>
                        <td>
                            <span style={{color:emp.age==26 ? "green":"white"}}>
                                {emp.age}
                            </span>
                        </td>
                        <td style={{backgroundColor:emp.salary>17000?"yellow":"black"}}>{emp.salary}</td>
                        <td style={{backgroundColor:emp.gender =="male"?"blue":"pink"}}>{emp.gender}</td>
                    </tr>
                )
            })}    
        
        </tbody>
    </table>
  </div>
  )}
