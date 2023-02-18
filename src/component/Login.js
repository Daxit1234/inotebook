import React, { useContext, useState } from 'react'
import NoteContext from '../context/Notecontext';
import { useNavigate } from 'react-router-dom';


function Login() {
    const context=useContext(NoteContext);
    const {showalert}=context
    const [credential, setcredential] = useState({ email: "", password: "" })
    const history = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault();
        const responce = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credential.email, password: credential.password })
        });
        const json = await responce.json();
        console.log(json)
        if(json.success){
            //save authoken and redirect
            localStorage.setItem("token",json.authtoken)
            history("/",{push:true})
            showalert("Login succesfull","success")
        }
        else{
            showalert("invalid Email or password","danger")
        }
    }
    const handleonchange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value })
    }
    return (
        <>
        <h1 className='my-3 text-center'>Login</h1>
        <div className='d-flex justify-content-center'>
            <form onSubmit={handlesubmit} className="col-6 ">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' value={credential.email} onChange={handleonchange} className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' value={credential.password} onChange={handleonchange} className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
        </>
    )
}

export default Login
