import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import logo from "/logo.svg";
import apple from "../assets/signin/apple.svg";
import google from "../assets/signin/google.svg";
import tick from "../assets/signin/tick.svg";
import headphone from "../assets/signin/headphones.svg";
import vrheadset from "../assets/signin/vrheadset.svg";
import younglady from "../assets/signin/younglady.svg";
import gamepad from "../assets/signin/gamepad.svg";


export default function Signin() {
    const navigate = useNavigate();

    useEffect(() => {
        const signInButton = document.getElementById("signin-btn");
        if (signInButton) {
            const handleClick = () => {
                navigate("sign-in/interests");
            };
            signInButton.addEventListener("click", handleClick);

            return () => {
                signInButton.removeEventListener("click", handleClick);
            };
        }
    }, [navigate]);

    return (
        // SIGN IN PAGE
        <section className="sign-in">
            <div className="left">
                <img src={logo} alt="Coonected Logo" />
                <div className="sub">
                    <h1>Sign In</h1>
                    <p>Welcome back, you’ve been missed!</p>
                    <div className="social-container">
                        <button className="social-btn1">
                            <img src={apple} alt="Apple Icon" />
                            Login via Apple
                        </button>
                        <button className="social-btn2">
                            <img src={google} alt="Google Icon" />
                            Login via Google
                        </button>
                    </div>
                    <p>OR</p>
                    <input type="email" name="email" placeholder="johndoe@gmail.com" required />
                    <input type="password" name="pasword" placeholder="password" required />
                    <div className="checkbox-container">
                        <div id="remember">
                            <img src={tick} alt="Tick Icon" />
                            <p>Remember me</p>
                        </div>
                        <Link to="/forget-password" >Forgot Password?</Link>
                    </div>
                    <button id="signin-btn" className="submit">Sign In</button>
                </div>
            </div>

            <div className="right">
                <div className="right-sub">
                    <div className="signup-container">
                        <h1>New Here</h1>
                        <p>You can create here, express yourself and be seen.</p>
                        <button className="submit2">
                            <Link to={"/sign-up"}>Sign Up</Link>
                        </button>
                    </div>
                </div>
                <img src={headphone} id="headphone" />
                <img src={vrheadset} id="vrheadset" />
                <img src={younglady} id="younglady" />
                <img src={gamepad} id="gamepad" />
            </div>
        </section>
    );
}