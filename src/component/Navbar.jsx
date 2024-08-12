import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
// import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState('https://i.ibb.co/JpvKXh7/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTAx-L3-Jt-Nj-A5-LXNvb-Glka-WNvbi13-LTAw-Mi1w-Ln-Bu.webp');

    return (
        <div className="border-b-4 border-black">
            <div className="flex items-center justify-between mb-6 mx-auto max-w-screen-lg px-4 lg:px-8">

                <div>
                    <Link to="/">
                        <img className="w-24 h-20 rounded-full border-2 border-black" src="https://i.ibb.co/bmPNdbV/logo-2.png" alt="" />
                    </Link>
                </div>

                <nav className="flex justify-center items-center gap-2 font-bold text-lg text-black">
                    <NavLink className="hover:bg-gray-300 p-2 rounded" to="/">Home</NavLink>
                    <NavLink className="hover:bg-gray-300 p-2 rounded" to="/about">About</NavLink>
                    <NavLink className="hover:bg-gray-300 p-2 rounded" to="/blog">Blog</NavLink>
                    <NavLink className="hover:bg-gray-300 p-2 rounded" to="/contact">Contact</NavLink>
                </nav>

                <div>
                    {user ? (
                        <Link to="/Profile">
                            <img className="text-white w-12 h-12 rounded-full font-bold text-lg hover:bg-red-300" src={user.reloadUserInfo.photoUrl ? user.reloadUserInfo.photoUrl : users} />
                        </Link>
                    ) : (
                        <Link to="/login">
                            <button className="py-2 text-white px-6 rounded font-bold text-lg bg-red-500 hover:bg-red-300">Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
