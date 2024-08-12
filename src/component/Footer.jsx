import { FaFacebook, FaInstagram, FaTelegram, FaReddit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-white text-lg bg-slate-800 pt-24 pb-8 mx-auto">
            <div className="flex justify-center gap-8 text-lg lg:text-xl font-semibold mb-20">
                <Link to="/"> <p>Home</p></Link>
                <Link to="/blog"> <p>Blog</p></Link>
                <Link to="/contact"> <p>Contact Us</p></Link>
                <Link to="/about"> <p>About Us</p></Link>
            </div>
            <hr className="w-3/4 lg:w-1/2 mx-auto" />
            <div className="text-center mt-10 px-4 lg:px-0">
                <h3 className="mb-5 text-base lg:text-lg mx-auto font-medium lg:w-1/2">
                    We love hearing from our community! Whether you have questions, feedback, or suggestions, please reach out to us through the following channels:
                </h3>
                <p className="mb-5 text-base lg:text-lg font-medium"> Email: support@gamingconventionscentral.com</p>
                <p className="mb-5 text-base lg:text-lg font-medium">Phone: (123) 456-7890</p>
                <p className="mb-6 text-lg lg:text-xl font-semibold"> Social Media: Follow us on</p>
                <div className="flex justify-center gap-4 text-2xl text-black">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook className="border-4 w-10 h-10 bg-white rounded-full hover:bg-gray-200 transition" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="border-4 w-10 h-10 bg-white rounded-full hover:bg-gray-200 transition" />
                    </a>
                    <a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer" aria-label="Reddit">
                        <FaReddit className="border-4 w-10 h-10 bg-white rounded-full hover:bg-gray-200 transition" />
                    </a>
                    <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                        <FaTelegram className="border-4 w-10 h-10 bg-white rounded-full hover:bg-gray-200 transition" />
                    </a>
                </div>
            </div>
            <p className="text-xs lg:text-sm text-center mt-20">@Copyright All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
