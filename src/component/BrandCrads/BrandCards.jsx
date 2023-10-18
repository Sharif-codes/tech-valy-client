

const BrandCards = ({brand}) => {
    const {id, brandName,brandImage}= brand
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="h-64" ><img className="w-full" src={brandImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="text-2xl font-semibold">{brandName}</p>
                    </div>
                </div>
        </div>
    );
};

export default BrandCards;