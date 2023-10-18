import { Outlet } from "react-router-dom";
import Navbar from "../component/header/Navbar/Navbar";
import Footer from "../component/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="container mx-auto space-y-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;