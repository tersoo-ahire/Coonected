import React from "react"
import ProductsExploreImage from "./ProductsExploreImage"
import productsexploredata from "../data/productsexploredata"

export default function ProductExplore(){
    const productsexplorelist = productsexploredata.map(item => (<ProductsExploreImage key={item.id} {...item} />))

    return (
        <div className="media-container">
            {productsexplorelist}
        </div>
    )
}