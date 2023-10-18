import Swal from "sweetalert2";


const AddProduct = () => {
    const handleAddProduct = e => {
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
        fetch('http://localhost:5300/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => {
                console.log(res)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product Added Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err =>
                 console.error(err))

    }
    return (
        <div>

            <div className="bg-[#F4F3F0] ">
                <form onSubmit={handleAddProduct} className="flex justify-center">

                    <div className="md:px-24 px-4 py-10 space-y-4">
                        <h2 className="text-center text-3xl font-bold text-green-700 md:py-3">Add New product</h2>
                        <div className="gap-4 w-full pb4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text  text-lg font-lg ">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-lg font-lg ">product Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Product Name" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="gap-4  w-full">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-lg ">Brand Name</span>
                                </label>
                                <input type="text" name="brand" placeholder="Enter Brand Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text  text-lg font-lg ">Product Type</span>
                                </label>
                                <input type="text" name="type" placeholder="Enter Product Type" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="gap-4 w-full pb4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-lg  ">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Enter Product Price" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text  text-lg font-lg ">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Enter Short Description" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-lg font-lg  ">Rating</span>
                            </label>
                            <input type="number" name="rating" placeholder="Product Rating" className="input input-bordered" />
                        </div>

                        <input className="btn bg-green-600 text-white w-full" type="submit" value="Add Product" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;