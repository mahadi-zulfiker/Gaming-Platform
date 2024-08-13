import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [users] = useState('https://i.ibb.co/JpvKXh7/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTAx-L3-Jt-Nj-A5-LXNvb-Glka-WNvbi13-LTAw-Mi1w-Ln-Bu.webp');

    return (
        <div className="border-b-4 border-black">
            <div className="flex flex-wrap items-center justify-between mb-6 mx-auto max-w-screen-lg px-4 lg:px-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img className="w-24 h-20 rounded-full border-2 border-black" src="https://i.ibb.co/bmPNdbV/logo-2.png" alt="Logo" />
                    </Link>
                </div>

                {/* Navbar Links */}
                <nav className="hidden lg:flex justify-center items-center gap-6 font-bold text-lg text-black">
                    <NavLink className="hover:bg-gray-300 p-2 rounded" to="/">Home</NavLink>
                    <NavLink className="hover:bg-gray-300 p-2 rounded" to="/about">About</NavLink>
                    <NavLink className="hover:bg-gray-300 p-2 rounded" to="/blog">Blog</NavLink>
                    <NavLink className="hover:bg-gray-300 p-2 rounded" to="/contact">Contact</NavLink>
                </nav>

                {/* User Profile or Login */}
                <div className="flex items-center">
                    {user ? (
                        <Link to="/Profile">
                            <img
                                className="w-12 h-12 rounded-full font-bold text-lg hover:bg-red-300"
                                src={user.reloadUserInfo.photoUrl ? user.reloadUserInfo.photoUrl : users}
                                alt="User Profile"
                            />
                        </Link>
                    ) : (
                        <Link to="/login">
                            <button className="py-2 px-6 rounded font-bold text-lg bg-red-500 text-white hover:bg-red-300">
                                Login
                            </button>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden mt-4 w-full">
                    <nav className="flex justify-around items-center gap-4 font-bold text-lg text-black">
                        <NavLink className="hover:bg-gray-300 p-2 rounded" to="/">Home</NavLink>
                        <NavLink className="hover:bg-gray-300 p-2 rounded" to="/about">About</NavLink>
                        <NavLink className="hover:bg-gray-300 p-2 rounded" to="/blog">Blog</NavLink>
                        <NavLink className="hover:bg-gray-300 p-2 rounded" to="/contact">Contact</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

