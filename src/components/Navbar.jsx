import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store";
import "./Navbar.css";

const Navbar = () => {
  const navigate=useNavigate()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  function logout() {
    sessionStorage.removeItem("id");
    dispatch(authActions.logout());
    navigate("/")
  }

  return (
    <div className="container navPag">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
        <li className="navbar-brand" >  todo</li>   
             
           
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
          <ul className="Rights navbar-nav navbar-right">
            <li>
              <Link to="/todo" className="glyphicon glyphicon-folder-open btn-nav btn btn-danger navbar-btn ">
                Todo
              </Link>
            </li>
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link
                    to="/SignUp"
                    className="glyphicon glyphicon-user nav-link active btn-nav btn btn-danger navbar-btn nav-item nav-link"
                    aria-current="page"
                  >
                    SignUp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Login"
                    className="glyphicon glyphicon-log-in nav-link nav-item  active btn-nav btn btn-danger navbar-btn"
                    aria-current="page"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <li className="nav-item" onClick={logout}>
                <Link
                  to="/Logout"
                  className="glyphicon glyphicon-log-out nav-link nav-item  active btn-nav btn btn-danger navbar-btn"
                  aria-current="page"
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
