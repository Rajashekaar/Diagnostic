import React from "react";
import './Register.css'

function Register() {
    return(

        <div>
                <div className="box">
                    <h1 className="login">Signup</h1>
                    <input className="input" type="name" placeholder="Enter your name"/>
                    {/* <input className="input" type="text" placeholder="Enter your email"/>
                    <label for="dob">AGE:</label>
                    <input className="input" style="display: inline;" type="date" name="dob" />
                    <input className="input" type="radio" name="gender" id="">male</input>
                    <input className="input" type="radio" name="gender" id="">female</input>
                    <input className="input" type="password" placeholder="Enter your password"/>
                    <input className="input" type="password" placeholder="confirm your password"/> */}
                    <button className="button"> Signup</button>
                    <div style="margin-top: 5px;">
                        <b>
                        Already have an account?
                        </b>
                        
                    </div>
                </div>
        </div>
    );
}

export default Register;