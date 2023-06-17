import React from "react";
import { Link } from "react-router-dom"
import logo from "/logo.svg";
import leftchevron from "../assets/signin/left_chevron.svg";
import man2 from "../assets/signin/man2.svg";

export default function ForgetPassword(){
    return (
        // FORGET PASSWORD
        <section className="sign-in">
        <div className="left">
            <img src={logo} alt="Coonected Logo" />
            <div className="sub">
                <h1>Forget Password</h1>
                <p>Enter your details to receive reset link</p>

                <input type="email" name="email" placeholder="johndoe@gmail.com" required />
                <button className="submit">Send</button>
                <Link id="back" to={"/sign-in"}>
                    <img src={leftchevron} />
                    Back to Sign
                </Link>
            </div>
        </div>

        <div className="right">
            <div className="right-sub"></div>
            <img src={man2} id="man" />
        </div>
    </section>
    )
}