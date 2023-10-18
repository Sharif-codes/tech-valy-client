// import { createContext, useState } from "react";
import { Link } from "react-router-dom";


// export const BrandContext= createContext(null)

const BrandCards = ({brand}) => {
    // const naviGate = useNavigate()
    // const [selectedBrand,setSelectedBrand]= useState('')
    
    const {id, brandName,brandImage}= brand

    const handleBrandProduct= (brandName)=>{
        console.log(brandName)
        // setSelectedBrand(brandName) 
        // naviGate('/brandProducts')
    }
    // const brandinfo=selectedBrand
    return (
        <div>
            <Link to={`brandProducts/${brandName}`}>
            
            <div onClick={()=>handleBrandProduct(brandName)} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="h-64" ><img className="w-full" src={brandImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="text-2xl font-semibold">{brandName}</p>
                    </div>
                </div>
                {/* <BrandContext value={brandinfo} >
                </BrandContext> */}
                </Link>
        </div>
    );
};

export default BrandCards;