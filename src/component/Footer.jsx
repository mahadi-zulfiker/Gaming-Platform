import { FaFacebook, FaInstagram, FaTelegram, FaReddit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" text-white text-lg bg-slate-800 pt-24  mx-auto ">

            <div className="flex justify-center gap-8 text-xl font-semibold mb-20">
               <Link to="/"> <p>Home</p></Link>
               <Link to="/blog"> <p className="mt-1">Blog</p></Link>
               <Link to="/contact"> <p>Contact Us</p></Link>
               <Link to="/about"> <p className="mt-1">About Us</p></Link> 
            </div>
<hr className="w-1/2 mx-auto"/>


            <div className="text-center mt-10">
            <h3 className="mb-5 text-lg mx-auto font-medium w-1/2">
                We love hearing from our community! Whether you have questions, feedback, or suggestions, please reach out to us through the following channels:
            </h3>
            <p className="mb-5 text-lg font-medium"> Email: support@gamingconventionscentral.com</p>
            <p className="mb-5 text-lg font-medium">Phone: (123) 456-7890</p>
            
                <p className="mb-6 text-xl font-semibold"> Social Media: Follow us on</p>
                <div className="flex justify-center gap-4 text-2xl text-black">

                <a href="https://www.facebook.com/">    <FaFacebook className="border-4 w-10 h-10 bg-white rounded-full" /></a>
                  <a href="https://www.instagram.com/">  <FaInstagram  className="border-4 w-10 h-10 bg-white rounded-full"/></a>

                   <a href="https://www.reddit.com/"> <FaReddit className="border-4 w-10 h-10 bg-white rounded-full" /></a>
                   <a href="https://telegram.org/"><FaTelegram  className="border-4 w-10 h-10 bg-white rounded-full"/></a> 
                   </div>
            </div>

<p className="text-sm text-center mt-20 pb-8">@Copyright All Rights Reserved</p>
        </div>
    );
};

export default Footer;


{/* <div>
            <h2 className="mb-5 text-lg font-medium">   Contact Us</h2>

            

            

         
          
</div> */}