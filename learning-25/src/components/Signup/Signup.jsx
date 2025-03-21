import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const Signup = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = async(data) => {

    const res = await axios.post("/user",data)
    console.log(res) 
    console.log(res.data) 
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>USER SIGNUP...</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>FirstName</label>
          <input type="text" {...register("firstName")}></input>
        </div>
        <div>
          <label>email</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <label>number</label>
          <input type="text" {...register("number")}></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register("password")}></input>
        </div>
        <div>
        <label>Role</label>
            <select {...register("role", { required: "Role is required" })}>
              <option value="">Select Role</option>
              <option value="petOwner">Pet Owner</option>
              <option value="petExpert">Pet Expert</option>
            </select>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};