import { useLoaderData } from "react-router-dom";
import BrandCards from "../../component/BrandCrads/BrandCards";

const Home = () => {
    const loadedBrand = useLoaderData()
    return (
        <div className="space-y-5">
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
                    loadedBrand.map(item=> <BrandCards key={item.id} brand={item}></BrandCards>)
                }
            </section>
        </div>
    );
};

export default Home;