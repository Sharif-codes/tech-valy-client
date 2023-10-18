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
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
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
                loader: ({params})=> fetch(`http://localhost:5300/products/${params.brand}`)
            }
           
        ]
    }
])

export default router;