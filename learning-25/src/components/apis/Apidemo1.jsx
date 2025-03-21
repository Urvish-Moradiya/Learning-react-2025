import axios from 'axios';
import React, { useState } from 'react'
import "/src/assets/apidemo.css";

export const Apidemo1 = () => {
    const [message, setmessage] = useState("");
    const [users, setusers] = useState([]);

    const getUserData = async ()=>{
        const res = await axios.get("https://node5.onrender.com/user/user");
        console.log(res.data) // original data
        setmessage(res.data.message);
        setusers(res.data.data)
    };

  return (
    <div>
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo1</h1>
        </div>
    <button onClick={()=> {getUserData()}}>
            Get Data
        </button>
        <span>
        {message}
        </span>
    <table className="api_table">
      <thead>
          <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>age</th>
              <th>isActive</th>
          </tr>
      </thead>
      <tbody>
          {users?.map((user)=>(
              <tr key={user.id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.isActive ? 'Online' : 'Offline'}</td>

              </tr>
          ))}
      </tbody>
  </table>
  </div>

 
    
  )
}
