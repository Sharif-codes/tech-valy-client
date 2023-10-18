// import { useContext } from "react";
// import { BrandContext } from "../../component/BrandCrads/BrandCards";

import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";


const BrandProducts = () => {
    // const {selectedBrand}= useContext(BrandContext)
    // console.log(selectedBrand)
    const brandProduct= useLoaderData()
    console.log(brandProduct)
    return (
        <div className="space-y-10">
            <div className="carousel w-full h-[70vh]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://www.laptopsdirect.co.uk/files/images/ld/LD-Top-Pick-MSI-LaptopMOB_750-x-235.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/premium-vector/flash-sale-banner-up-70_39897-7.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://png.pngtree.com/png-clipart/20220403/original/pngtree-digital-electronic-poster-banner-png-image_7492570.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/premium-psd/front-view-cyber-monday-sale-arrangement-mock-up_23-2148659812.jpg?w=826" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <h2 className="text-4xl text-pink-700 font-bold">Brand Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto space-y-4 ">
            {
                brandProduct.length>0? brandProduct.map(item=> <ProductCard key={item._id} products={item}></ProductCard> ): <h2 className="text-3xl font-bold text-center"> <span className="text-5xl font-extrabold text-red-600 md:grid-cols-1 mx-auto">Sorry!!</span> <br /> No product Available!</h2>
            }
        </div>
        </div>
    );
};

export default BrandProducts;