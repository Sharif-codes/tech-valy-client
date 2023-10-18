import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const loadedProduct = useLoaderData()
    console.log(loadedProduct)
    const { _id, photo, name, brand, type, description, price, rating } = loadedProduct
    const cartProduct= { photo, name, brand, type, description, price, rating }
    const handleCart= ()=>{
        fetch('https://tech-valy-server-ot49yue2u-sharifs-projects-dda288d4.vercel.app/cart',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartProduct)
        } )
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId)
            {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Add to Cart Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            
        } )
    }
    return (
        <div>
            <div  className="card w-2/3 card-side bg-base-100 shadow-xl flex flex-col md:flex-row mx-auto">
                <figure className="h-72 w-full"><img src={photo} className="w-full h-full"  alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Brand: {brand}</p>
                    <p>Price:{price} </p>
                    <p>Type:{type} </p>
                    <p>{description}</p>
                    
                    <div className="card-actions justify-end">
                        
                        <button onClick={handleCart} className="btn btn-primary">Add to Cart</button>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;