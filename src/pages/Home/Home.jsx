import { useLoaderData } from "react-router-dom";
import BrandCards from "../../component/BrandCrads/BrandCards";
import { useEffect, useState } from "react";


const Home = () => {
    const loadedBrand = useLoaderData()


    return (
        <div className="space-y-10">


            <div className="hero min-h-[70vh] " style={{ backgroundImage: 'url(https://i.pinimg.com/736x/5b/dc/1d/5bdc1d19028c6b0e43b309601a25cb36.jpg)' }} data-aos="zoom-in">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Best Tech Product of Best Brands!</h1>
                        <p className="mb-5"></p>
                        <button className="btn btn-primary">Expore Now</button>
                    </div>
                </div>
            </div>
            <h2 className="text-3xl font-bold text-pink-700">Choose Brand</h2>
            {/* Brand section */}
            <section className="grid md:grid-cols-3 grid-cols-1 gap-5">

                {
                    loadedBrand.map(item => <BrandCards key={item.id} brand={item}></BrandCards>)
                }
            </section>

            <section>
                <h2 className="text-4xl text-pink-700 font-bold pb-10">Most Frequent Questions</h2>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What you sell?
                    </div>
                    <div className="collapse-content">
                        <p>We sell Electronic and Technological products of best brands around the world</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Home Delivery Available?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, We ensure you!</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What is the service charge for home delivery?
                    </div>
                    <div className="collapse-content">
                        <p>2$ per KG</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;