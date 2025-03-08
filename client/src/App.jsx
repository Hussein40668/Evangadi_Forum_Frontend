import React, { useEffect, useState, createContext } from "react";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import axios from "./axiosConfig";
import { useNavigate } from "react-router-dom";

export const AppState = createContext();

const App = () => {
  const [user, setuser] = useState({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setuser(data);
      // console.log(data);
    } catch (error) {
      console.log(error.response);
      navigate("/login");
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AppState.Provider value={{ user, setuser }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AppState.Provider>
  );
};

export default App;
