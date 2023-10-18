import { useState } from "react";
import Swal from "sweetalert2";


const CartCards = ({ cart, cartProduct, setCartProduct }) => {

    const { _id, photo, name, brand, type, description, price, rating } = cart

    const handleCartDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5300/cart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = cartProduct.filter(item => item._id !== _id)
                            setCartProduct(remaining)

                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="h-72" ><img className="w-full h-full" src={photo} alt="Shoes" /></figure>
                <div className="card-body space-y-1">
                    <p className="text-lg font-semibold">Product name: {name}</p>
                    <p className="text-sm font-medium">Brand: {brand}</p>
                    <p className="text-sm font-medium">Type: {type}</p>
                    <p className="text-sm font-medium">Price: {price}$</p>
                    <p className="text-sm font-medium"> Rating:{rating}</p>
                    <div className="flex">

                        <button onClick={() => handleCartDelete(_id)} className="btn px-5 bg-pink-600 text-lg font-bold text-gray-800">Delete</button>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default CartCards;