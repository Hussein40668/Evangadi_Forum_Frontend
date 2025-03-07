import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios  from "../../axiosConfig";

const Register = () => {
  const navigate = useNavigate();
  const usernameDOM = useRef();
  const firstNameDOM = useRef();
  const lastNameDOM = useRef();
  const emailDOM = useRef();
  const passwordDOM = useRef();

  const handleSubmit = async (e) => { 
    e.preventDefault();
    // console.log(usernameDOM.current.value);
    
    const usernameValue = usernameDOM.current.value;
    const firstnameValue = firstNameDOM.current.value;
    const lastnameValue = lastNameDOM.current.value;
    const emailValue = emailDOM.current.value;
    const passwordValue = passwordDOM.current.value;

    if (!usernameValue || !firstnameValue || !lastnameValue || !emailValue || !passwordValue) {
      alert('Please fill all the fields');
      return 
    }

try {
  await axios.post('/users/register', {
    username: usernameValue,
    firstname: firstnameValue,
    lastname: lastnameValue,
    email: emailValue,
    password: passwordValue,
  });
alert ('User registered successfully, please login to continue');
  navigate('/login');
  
} catch (error) {
  alert('Something went wrong, please try again');
  console.log(error.response);
}
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Username :--</span>
          <input ref={usernameDOM}  type="text"  placeholder='username' />
        </div>
        <br />

        <div>
          <span>First name :--</span>
          <input ref={firstNameDOM} type="text" placeholder='first name' />
        </div>
        <br />

        <div>
          <span>Last name :--</span>
          <input ref={lastNameDOM} type="text" placeholder='last name'/>
        </div>
        <br />

        <div>
          <span>Email :--</span>
          <input ref={emailDOM} type="text" placeholder='email' />
        </div>
        <br />

        <div>
          <span>Password :--</span>
          <input ref={passwordDOM} type="text" placeholder='password' />
        </div>
        <br />

        <div>
         <button type='submit'>Register</button>
        </div>
        

      </form>
    </section>
  );
}

export default Register
