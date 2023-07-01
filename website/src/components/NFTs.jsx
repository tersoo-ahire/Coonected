import React from "react";
import NFT from "./NFT";
import nftdata from "../data/nfts";

export default function NFTs(){
    const nftslist = nftdata.map(item => (<NFT key={item.id} {...item} />))

    return (
        <div className="nfts-container">
            {nftslist}
        </div>
    )
}