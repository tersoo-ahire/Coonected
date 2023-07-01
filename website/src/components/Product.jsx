import React from "react";
import checkmark from "../assets/nfts/checkmark.svg";

export default function Product(props) {
    return (
        <div className="product">
            <img src={props.product_image} alt={props.product_name} />
            <div className="collections">
                <span>{props.product_collection}</span>
                <img src={checkmark} alt="Verified" />
            </div>
            <div className="name">{props.product_name}</div>
            <div className="price">
                <div className="price-sub">
                    <span>$ {props.product_price}</span>
                </div>
                <button>Shop Now</button>
            </div>
        </div>
    )
}