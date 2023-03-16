import React from "react";
import "../styles/login.scss";
function Login ()  {
   return (
     <div className="container">
        <div className="slide">
            <h1>Login</h1>
            <p className="p">Doesn't have an account yet?Sign up</p>
            <label for ="email">Email address</label>
            <input type= "text" className="email"  placeholder="you@example.com"></input>
            <label for= "password" className="password">Password</label>
            <input type="password" className="password"  placeholder="Enter& character or more"></input>
                <input type="checkbox"  placeholder="Remember me"></input>
                <p className="rememnber">Remember me</p>
                <button type="btn"className="btn">Login</button>
            </div>
            <div className="slide1">
               <img className="img" src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg" alt=""/> 
            </div>
        </div>
   
   )
}
export default Login;