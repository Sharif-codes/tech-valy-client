import { useLoaderData } from "react-router-dom";
import BrandCards from "../../component/BrandCrads/BrandCards";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const Home = () => {
    const loadedBrand = useLoaderData()

    const handleFeedback = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const location= form.location.value
        const comment = form.comment.value
        const feedback= {
            name, location, comment
        }
        console.log(feedback)
        fetch('https://tech-valy-server-ot49yue2u-sharifs-projects-dda288d4.vercel.app/feedback', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
            .then(res => {
                res.json()
            })
            .then(data =>
                 console.log(data))
                 Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Feedback Added Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
    }
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
            <section className="mx-auto space-y-7 text-center">
                <h2 className="text-3xl text-blue-700 font-bold pb-10">User Experince</h2>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleFeedback} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Location</span>
                                    </label>
                                    <input type="text" name="location" placeholder="Your location" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Comment</span>
                                    </label>
                                    <input type="text" name="comment" placeholder="Your comment" className="input input-bordered" required />
                                    
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;