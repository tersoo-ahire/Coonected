import React from "react";
import coinbase from "../assets/wallet/coinbase.png";
import metamask from "../assets/wallet/metamask.png";
import phantom from "../assets/wallet/phantom.svg";

export default function Wallet(){
    return (
        <div className="wallet-container">
            <div className="top-area">
                <p>Choose one of available wallet providers or create a new wallet.</p>
                <p style={{color: "#3377FF", fontWeight: "bold"}}>What is a wallet?</p>
            </div>
            <div className="bottom-area">
                <div className="wallet">
                    <img src={coinbase} alt="Coinbase" />
                    <span>Coinbase Wallet</span>
                </div>
                <div className="wallet">
                    <img src={metamask} alt="MetaMask" />
                    <span>MetaMask Wallet</span>
                </div>
                <div className="wallet">
                    <img src={phantom} alt="Phantom" />
                    <span>Phantom Wallet</span>
                </div><div className="wallet">
                    <img src="https://trustwallet.com/assets/images/media/assets/TWT.svg" alt="Trust" />
                    <span>Trust Wallet</span>
                </div>
            </div>
            <button>Show more</button>

        </div>
    )
}