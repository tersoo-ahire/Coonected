import React from "react";
import eth from "../assets/nfts/eth.svg";
import checkmark from "../assets/nfts/checkmark.svg";

export default function NFT(props){
    return (
        <div className="nft">
            <img src={props.nft_image} alt={props.nft_name} />
            <div className="collections">
                <span>{props.nft_collection}</span>
                <img src={checkmark} alt="Verified" />
            </div>
            <div className="name">{props.nft_name}</div>
            <div className="price">
                <div className="price-sub">
                    <img src={eth} alt="Ethereum" />
                    <span>{props.nft_price}</span>
                </div>
                <button>Place Bid</button>
            </div>
        </div>
    )
}