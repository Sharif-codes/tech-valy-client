import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const loadedProduct= useLoaderData()
    const {_id,photo,name,brand,type,description,price,rating}= loadedProduct
    console.log(loadedProduct)
    const handleUpdateProduct= e=>{
        e.preventDefault()
        const form = e.target
        const photo = form.photo.value
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const newProduct = { photo, name, brand, type, price, description, rating }
        console.log(newProduct)
         fetch(`http://localhost:5300/singleProduct/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
         })
         .then(res=> res.json())
         .then(data=>{
            console.log(data)
            if(data.modifiedCount>0)
            {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product Updated Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
         })
            
        
          
    }
    return (
        <div>
            <div className="bg-[#F4F3F0] ">
                <form onSubmit={handleUpdateProduct} className="flex justify-center">

                    <div className="md:px-24 px-4 py-10 space-y-4">
                        <h2 className="text-center text-3xl font-bold text-green-700 md:py-3">Add New product</h2>
                        <div className="gap-4 w-full pb4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text  text-lg font-lg ">Photo URL</span>
                                </label>
                                <input defaultValue={photo} type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-lg font-lg ">product Name</span>
                                </label>
                                <input defaultValue={name} type="text" name="name" placeholder="Enter Product Name" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="gap-4  w-full">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-lg ">Brand Name</span>
                                </label>
                                <input defaultValue={brand} type="text" name="brand" placeholder="Enter Brand Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text  text-lg font-lg ">Product Type</span>
                                </label>
                                <input defaultValue={type} type="text" name="type" placeholder="Enter Product Type" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="gap-4 w-full pb4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-lg  ">Price</span>
                                </label>
                                <input defaultValue={price} type="number" name="price" placeholder="Enter Product Price" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text  text-lg font-lg ">Description</span>
                                </label>
                                <input defaultValue={description} type="text" name="description" placeholder="Enter Short Description" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-lg font-lg  ">Rating</span>
                            </label>
                            <input defaultValue={rating} type="number" name="rating" placeholder="Product Rating" className="input input-bordered" />
                        </div>

                        <input className="btn bg-green-600 text-white w-full" type="submit" value="Update Product" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;