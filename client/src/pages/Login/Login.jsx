import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../../axiosConfig";

const Login = () => {
  const navigate = useNavigate();
  const emailDOM = useRef();
  const passwordDOM = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = emailDOM.current.value;
    const passwordValue = passwordDOM.current.value;

    if (!emailValue || !passwordValue) {
      alert('Please fill all the fields');
      return;
    }

    try {
    const {data} = await axios.post('/users/login', {
        email: emailValue,
        password: passwordValue,
      });
      alert('User logged in successfully');
      localStorage.setItem('token', data.token);
      // navigate('/');
      console.log(data);
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Email :--</span>
          <input ref={emailDOM} type="text" placeholder="email" />
        </div>
        <br />

        <div>
          <span>Password :--</span>
          <input ref={passwordDOM} type="text" placeholder="password" />
        </div>
        <br />

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
}

export default Login
