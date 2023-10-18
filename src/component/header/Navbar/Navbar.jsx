import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
    }
    return (
        <div className="border-b-2 p-4">
            <div className="navbar bg-base-100 flex flex-col lg:flex-row">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active text-green-500" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/addProduct"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active text-green-500" : ""
                                    }
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/cart"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active text-green-500 " : ""
                                    }
                                >
                                    My Cart
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active text-green-500" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl font-bold text-stone-600">Tech<span className="text-pink-600">Vally</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active text-green-500" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/addProduct"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active text-green-500" : ""
                                    }
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/cart"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active text-green-500 " : ""
                                    }
                                >
                                    My Cart
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active text-green-500" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
                <div className="navbar-end flex flex-col lg:flex-row">
                    {
                        user && <div className="flex flex-col lg:flex-row gap-2 mx-auto">
                            <div>
                                <img className="w-12 mx-auto rounded-full" src={user?.photoURL} alt="" />
                            </div>
                            <div>
                                <p>{user.displayName}</p>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    }

                    {
                        user ? <button onClick={handleSignOut} className="btn btn-primary">Logout</button> :
                            <Link to="/login"> <a className="btn">Login</a></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;