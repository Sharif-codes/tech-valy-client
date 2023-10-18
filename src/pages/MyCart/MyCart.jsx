import { useLoaderData } from "react-router-dom";
import CartCards from "./CartCards";
import { useState } from "react";


const MyCart = () => {
    const loadedCart= useLoaderData()
    const [cartProduct, setCartProduct]= useState(loadedCart)
    
    // const handleDeleteCart= ()=>{

    // }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
           {
            cartProduct.map(item=> <CartCards
                 key={item._id}
                  cart={item}
                  cartProduct={cartProduct}
                  setCartProduct= {setCartProduct}
                  ></CartCards>)
           }
        </div>
    );
};

export default MyCart;