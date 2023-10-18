import { useLoaderData } from "react-router-dom";
import CartCards from "./CartCards";


const MyCart = () => {
    const loadedCart= useLoaderData()
    
    // const handleDeleteCart= ()=>{

    // }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
           {
            loadedCart.map(item=> <CartCards key={item._id} cart={item}></CartCards>)
           }
        </div>
    );
};

export default MyCart;