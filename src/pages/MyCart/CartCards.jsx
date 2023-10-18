

const CartCards = ({cart}) => {
    const { _id, photo, name, brand, type, description, price, rating } = cart
    const handleCartDelete= ()=>{
        fetch()
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
                    <div className="flex justify-around ">
                        
                            <button onClick={handleCartDelete}  className="btn px-5 bg-pink-600 text-lg font-bold text-gray-800">Delete</button>
                        

                    </div>


                </div>

            </div>
        </div>
    );
};

export default CartCards;