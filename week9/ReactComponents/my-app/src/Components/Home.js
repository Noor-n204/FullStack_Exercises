import React from 'react';
import Item from './Item';

function Home(props){
    if(props.shouldDiscount){
        let newPriceArr =props.store.map(s => s.price = s.price * (1 - s.discount))
        console.log(newPriceArr)
        let newOBJ = {      
            user: "Robyn",
            store: 5,
            shouldDiscount: false,
            currentPage: "Home"}
        props.setStoreF(newOBJ)
    }
    return(<div>
        {[...props.store].map(i => <Item item ={i.item} price={i.price} />)}
        </div>
        )
}

export default Home