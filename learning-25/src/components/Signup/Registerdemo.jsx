
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// simple validation mate schema create karvanu yup ma 
const validationSchema = yup.object().shape({
    // je name thi register thay e ma j validation appvu
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
});

export const Registerdemo = () => {
  const { register,handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(validationSchema)});    // Use yupResolver validation ne kaam karava mate

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{textAlign:"center"}}>
      <div>
        <input {...register('username')} placeholder="Username" />
        {errors.username && (<p style={{ color: 'red' }}>
            {errors.username.message}
          </p>
        )}
      </div>
      <div>
        <input {...register('email')} placeholder="Email"/> 
           {errors.email && (<p style={{ color: 'red' }}>
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <input type="password" {...register('password')} placeholder="Password"/>
        {errors.password && (<p style={{ color: 'red' }}>
            {errors.password.message}
          </p>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
