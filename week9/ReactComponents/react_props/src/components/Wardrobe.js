import React, { Component } from 'react';
import Article from './Article';

function Wardrobe() {
    let wardrobe = [
        { type: "shirt", color: "red", size: "Medium" },
        { type: "shirt", color: "blue", size: "Medium" },
        { type: "pants", color: "blue", size: "Medium" },
        { type: "accessory", color: "sapphire", size: "" },
        { type: "accessory", color: "lilac", size: "" }
      ]

    return (
        <div>
            {wardrobe.filter(w =>w.color === "blue").map(w => <Article info = {w} key = {w.color + w.type}/>)}
        </div>
    )

}

export default Wardrobe