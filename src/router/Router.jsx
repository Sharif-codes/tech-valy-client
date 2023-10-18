import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import MainLayout from "../Root/MainLayout";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../pages/BrandProducts/ProductDetails";




const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout> ,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('/brand.json')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute> ,
            },
            {
                path: '/cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: ()=> fetch('https://tech-valy-server-ot49yue2u-sharifs-projects-dda288d4.vercel.app/cart')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/brandProducts/:brand',
                element: <BrandProducts></BrandProducts>,
                loader: ({params})=> fetch(`https://tech-valy-server-ot49yue2u-sharifs-projects-dda288d4.vercel.app/products/${params.brand}`)
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params})=> fetch(`https://tech-valy-server-ot49yue2u-sharifs-projects-dda288d4.vercel.app/singleProduct/${params.id}`)
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute> ,
                loader: ({params})=> fetch(`https://tech-valy-server-ot49yue2u-sharifs-projects-dda288d4.vercel.app/productDetails/${params.id}`)

            }
           
        ]
    }
])

export default router;