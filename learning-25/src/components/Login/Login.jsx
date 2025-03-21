import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    setLoading(true);
    setErrorMessage("");
  
    try {
      // Check the data being sent in the request
      console.log("Sending login request with data:", data);
  
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Data must be JSON stringified
      });
  
      // Log the raw response to check its status and body
      console.log("Raw response:", response);
  
      // Parse the response as JSON
      const result = await response.json();
      console.log("Parsed response JSON:", result);
  
      if (response.ok) {
        alert("Login successful");

        navigate("/dashboard");
      } else {
        setErrorMessage(result.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const validationmethod = {
    emailValidator: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Enter a valid email address",
      },
    },
    passwordValidator: {
      required: {
        value: true,
        message: "Password is required",
      },
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters long",
      },
    },
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login Demo</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Email</label>
          <input
            type="text"
            {...register("email", validationmethod.emailValidator)}
          />
          <span style={{ color: "red" }}>
            {errors.email?.message}
          </span>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", validationmethod.passwordValidator)}
          />
          <span style={{ color: "red" }}>
            {errors.password?.message}
          </span>
        </div>
        <div>
          <input type="submit" value={loading ? "Logging in..." : "Login"} disabled={loading} />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
};
