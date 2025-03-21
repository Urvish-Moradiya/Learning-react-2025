import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo1 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()


    const submitHandler = (data) =>{
        console.log("data......",data)
    }
    const validationmethod = {
        ageValidator:{
            required:{
                value:true,
                message:"Age is required"
            },
            min:{
                value:18,
                message:"min age 18*"
            },
            max:{
                value:60,
                message:"max age 60*"
            }
        },
        emailValidator:{
            required:{
                value:true,
                message:"email is required*"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
            <label>Name</label>
            <input type='text' placeholder='enter name' {...register("name",{required:{value:true,message:"Name is required*"}})}></input>
            <span style={{color:"red"}}>
                    {errors.name?.message}
                </span>
            </div>
            <div>
                <label>Age</label>
                <input type='text' {...register("age",validationmethod.ageValidator)}></input>
                <span style={{color:"red"}}>{errors.age?.message}</span>
            </div>
            <div>
                <label>Email</label>
                <input type='text' {...register("email",validationmethod.emailValidator)}></input>
                <span style={{color:"red"}}>{errors.email?.message}</span>
            </div>
            <div>
                <select {...register("country")}>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="germany">Germany</option>
                    <option value="canada">Canada</option>
                    
                </select>
            </div>
            <div>
                    <label style={{padding:"10px"}}>GENDER</label>
                    MALE:<input type='radio' name='gender' value="male"{...register("gender")}></input>
                    FEMALE:<input type='radio' name='gender' value="female"{...register("gender")}></input>
                </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
