import React from "react";
import { Link } from "react-router-dom"
import logo from "/logo.svg";
import apple from "../assets/signin/apple.svg";
import google from "../assets/signin/google.svg";
import tick from "../assets/signin/tick.svg";
import man from "../assets/signin/man.svg";


export default function Signup() {
    return (
        // SIGN UP PAGE
        <section className="sign-in">
            <div className="left">
                <img src={logo} alt="Coonected Logo" />
                <div className="sub">
                    <h1>Sign Up</h1>
                    <p>Time to express yourself!</p>
                    <div className="social-container">
                        <button className="social-btn1">
                            <img src={apple} alt="Apple Icon" />
                            Sign up via Apple
                        </button>
                        <button className="social-btn2">
                            <img src={google} alt="Google Icon" />
                            Sign up via Google
                        </button>
                    </div>
                    <p>OR</p>
                    <input type="email" name="email" placeholder="johndoe@gmail.com" required />
                    <input type="password" name="pasword" placeholder="password" required />
                    <input type="password" name="pasword" placeholder="confirm password" required />
                    <div className="checkbox-container">
                        <div id="remember">
                            <img src={tick} alt="Tick Icon" />
                            <p>Remember me</p>
                        </div>
                        <Link to="#" >Forgot Password?</Link>
                    </div>
                    <button className="submit">Sign Up</button>
                </div>
            </div>

            <div className="right">
                <div className="right-sub">
                    <div className="signup-container">
                        <h1>It’s happening right here</h1>
                        <p>Coonected makes it happen!</p>
                        <button className="submit2">Sign Up</button>
                    </div>
                </div>
                <img src={man} id="man" />
            </div>
        </section>
    )
}