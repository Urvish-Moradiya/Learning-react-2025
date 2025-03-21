import React from 'react'
import { useForm } from 'react-hook-form';

export const Logindemo = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();

    const submitHandler = (data)=>{
        console.log(data)
    }

    const validationmethod = {
        emailValidator :{
            required:{
                value:true,
                message:"email is required"
            }
        },
        passwordValidator:{
            required:{
                value:true,
                message:"password is required"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Login Demo</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Email</label>
                <input type="text" {...register("email",validationmethod.emailValidator)}></input>
                <span style={{color:"red"}}>
                    {errors.email?.message}
                </span>
            </div>
            <div>
                <label>Password</label>
                <input type='password' {...register("password",validationmethod.passwordValidator)}></input>
                <span style={{color:"red"}}>
                    {errors.password?.message}
                </span>
            </div>
            <div>
                <input type='submit' value="login"></input>
            </div>
        </form>

    </div>
  )
}
