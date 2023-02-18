import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  let navigate=useNavigate()
  let handlelogout=()=>{
    localStorage.removeItem("token")
    navigate('/login',{push:true})
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand bg-success rounded" to="/">
            I Notebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
           {!localStorage.getItem('token')?
           <form className="d-flex">
              <Link className="btn btn-outline-success mx-2" to="/login" role="button"  >Login</Link>
              <Link className="btn btn-outline-success mx-2" to="/singup" role="button"  >Singup</Link>
            </form> :<button onClick={handlelogout} className="btn btn-outline-success mx-2">Log Out</button>
           } 
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
