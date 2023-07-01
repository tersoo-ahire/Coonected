import React from "react";
import Product from "./Product";
import productdata from "../data/products";

export default function NFTs(){
    const productslist = productdata.map(item => (<Product key={item.id} {...item} />))

    return (
        <div className="product-container">
            {productslist}
        </div>
    )
}