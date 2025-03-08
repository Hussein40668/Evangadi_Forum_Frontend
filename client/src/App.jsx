import React, {useEffect} from 'react'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import { Routes, Route } from 'react-router-dom'
import axios from './axiosConfig'
import { useNavigate } from 'react-router-dom'


const App = () => {
  const token = localStorage.item('token');
const navigate = useNavigate();
  const checkUser = async () => {

try {
  await axios.get('/users/checkUser', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
} catch (error) {
  console.log(error.response);
  navigate('/login');
}
    
  }

   useEffect(() => {
     checkUser();
   }, []);
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
      </Routes>
    </>
  );
}

export default App

