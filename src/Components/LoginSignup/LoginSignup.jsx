import React, {useState} from 'react';
import './LoginSignup.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return(
        <div className={`container ${isLogin ? 'login-backg' : 'signup-backg'}`}>
            <div className={`wrapper ${isLogin ? '' : 'slide'}`}>
                <form className="login-form" action="">
                    <h1>Login</h1>
                    <div className="form input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser classname='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className= 'icon' />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={toggleForm}>SignUp</a></p>
                    </div>
                </form>

                <form className="signup-form" action="">
                <div className= "signup">
                    <h1>Sign Up</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser classname='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required />
                        <FaEnvelope className= 'icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className= 'icon' />
                    </div>
                    <button>Sign Up</button>
                    <div className="register-link">
                    <p>Already have an account? <a href="#" onClick={toggleForm}>Login</a></p>
                    </div>    
                </div>
                </form>
            </div>
        </div>
    )
}

export default LoginSignup