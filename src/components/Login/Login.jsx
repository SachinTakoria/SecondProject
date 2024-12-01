import React,{useState} from "react";
import "./Login.css";
import axios from "axios"
import {useNavigate} from "react-router-dom"

import Heading from "../Heading/Heading";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  function set(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  async function Login(e) {
    e.preventDefault();
    
   await axios.post("http://localhost:2010/api/v1/login",input).then((response)=>{
    console.log(response)
 
 sessionStorage.setItem("id",response.data.others._id )
 dispatch(authActions.login())
  navigate("/todo")
 
 
  
 
})
}
  return (
    <div>
      <div className="signup">
        <div className="container">
          <div className="row">
            <div className="col-md-8 column d-flex justify-content-center align-items-center bg-primary">
              <div className="inputDesign">
                <input
                  className="form-control"
                  type="email"
                  placeholder="enter your email"
                  name="email"
                  value={input.email}
                  onChange={set}
                  id=""
                />

                <input
                  className="form-control"
                  type=""
                  placeholder="enter your password"
                  name="password"
                  value={input.password}
                  onChange={set}
                  id=""
                />
                <button onClick={Login} className=" btn-Signup form-control">Log-In</button>
              </div>
            </div>

            <Heading first="Sign" second="In" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
