import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import NoteContext from '../context/Notecontext';

function Singup() {
  const context=useContext(NoteContext);
  const {showalert}=context
  const [credential, setcredential] = useState({name:"", email: "", password: "",cpassword:"" })
  const history = useNavigate()

  const handlesubmit = async (e) => {
      e.preventDefault();
      const {name,email,password}=credential
      const responce = await fetch("http://localhost:5000/api/auth/createuser", {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({name,email,password })
      });
      const json = await responce.json();
      console.log(json)
      if(json.success){
          //save authoken and redirect
          localStorage.setItem("token",json.authtoken)
          history("/",{push:true})
          showalert("Sing in succesfull","success")
      }
      else{
        showalert("enter valid data","danger")
      }
  }
  const handleonchange = (e) => {
      setcredential({ ...credential, [e.target.name]: e.target.value })
  }
  return (
    <>
      <h1 className='my-3 text-center'>Sing Up</h1>
        <div className='d-flex justify-content-center'>
            <form onSubmit={handlesubmit} className="col-6">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name='name'  onChange={handleonchange} className="form-control" id="name" aria-describedby="emailHelp" minLength={3} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email'  onChange={handleonchange} className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password'  onChange={handleonchange} className="form-control" id="password" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" name='cpassword'  onChange={handleonchange} className="form-control" id="cpassword" minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    </>
  )
}

export default Singup
