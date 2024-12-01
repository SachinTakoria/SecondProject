import React, { useState } from "react";
import "./SignUp.css";
import Heading from "../Heading/Heading";
import axios from "axios"
import {useNavigate} from "react-router-dom"

const SignUp = () => {
  const navigate=useNavigate()
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
  });
  function set(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
   async function signup(e) {
    e.preventDefault();
  await axios.post("http://localhost:2010/api/v1/register",input).then((response)=>{
 if(response.data.message==="user already exits"){
  alert(response.data.message)
 }
 else{
  alert(response.data.message)
  setInput({
    email: "",
    username: "",
    password: "",
  });
  navigate("/Login")
 }
    
    
  })


    
  }
   
    
  
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-md-8 column d-flex justify-content-center align-items-center bg-primary">
            <div className="inputDesign">
              <input
                value={input.email}
                onChange={set}
                className="form-control"
                type="email"
                placeholder="enter your email"
                name="email"
                id=""
              />
              <input
                value={input.username}
                onChange={set}
                className="form-control"
                type="username"
                placeholder="enter your username"
                name="username"
                id=""
              />
              <input
                value={input.password}
                onChange={set}
                className="form-control"
                type=""
                placeholder="enter your password"
                name="password"
                id=""
              />
              <button onClick={signup} className=" btn-Signup form-control">
                Sign-Up
              </button>
            </div>
          </div>

          <Heading first="Sign" second="Up" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
