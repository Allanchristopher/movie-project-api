import React,{useState} from "react";
import "./Login.css";
import icon from "../asset/toppng 1.svg";
import { validUser ,validPassword } from "../constant/data";
import {useNavigate} from "react-router-dom";
function Login() {
  const [username,setUsername] = useState("");
  const [Password,setPassword] = useState("");

const navigate = useNavigate();

function eventHandle(e){
 
  const user = validUser(username);
  const userpassword = validPassword(Password);
  if(user && userpassword){
    navigate('/Home');
    console.log("invalid user");
  }
  else  {
    alert("Ivalid username or password")
  }
}




  return (
    <div>
      <header className="Header">
        <img className="login-icon" src={icon} alt="icon" />
      </header>
      <body className="body">
        <div className="login-box">
          <div className="signin-heading">
            <p>
              <span>Sign In</span>
              <br />
              Sign In To Your Self Service Portal
            </p>
          </div>
          <div className="form">
            <form className="form-container" onSubmit={eventHandle}>
              {" "}
              <input type="text" placeholder="Username" className="form-input" required="required" onChange={(e)=>setUsername(e.target.value)}></input>
              <input type="text" placeholder="Password" className="form-input" required="required" onChange={(e)=>setPassword(e.target.value)}></input>
              <button type="submit" className="form-button">LOGIN</button>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Login;
