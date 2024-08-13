import { Link, useLoaderData } from "react-router-dom";
import MixNews from "./MixNews";
import RecentNews from "./RecentNews";
import PreviousNews from "./PreviousNews";
import { useContext, useState } from "react";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../auth/AuthProvider";

const Blog = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const [allNewsHide, setAllNewsHide] = useState('hidden');
    const [btnStyle1, setBtnStyle1] = useState('no-underline');
    const [btnStyle2, setBtnStyle2] = useState('no-underline');
    const [btnStyle3, setBtnStyle3] = useState('no-underline');
    const [recentNewsHide, setRecentNewsHide] = useState('hidden');
    const [previousNewsHide, setPreviousNewsHide] = useState('hidden');
    const [hide, setHide] = useState('');
    const allNews = useLoaderData();

    const handleAllNews = () => {
        setRecentNewsHide('hidden');
        setPreviousNewsHide('hidden');
        setAllNewsHide('block');
        setHide('hidden');
        setBtnStyle1('underline decoration-white');
        setBtnStyle2('no-underline decoration-white');
        setBtnStyle3('no-underline decoration-white');
    };

    const handleRecentNews = () => {
        setRecentNewsHide('block');
        setPreviousNewsHide('hidden');
        setAllNewsHide('hidden');
        setHide('hidden');
        setBtnStyle2('underline decoration-white');
        setBtnStyle1('no-underline decoration-white');
        setBtnStyle3('no-underline decoration-white');
    };

    const handlePreviousNews = () => {
        setRecentNewsHide('hidden');
        setPreviousNewsHide('block');
        setHide('hidden');
        setAllNewsHide('hidden');
        setBtnStyle3('underline decoration-white');
        setBtnStyle2('no-underline decoration-white');
        setBtnStyle1('no-underline decoration-white');
    };

    const handleToGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="bg-white flex flex-col lg:flex-row border-t-4 border-black">
            {/* Sidebar */}
            <div className="flex flex-col gap-4 font-bold text-lg lg:text-xl bg-gray-100 py-8 lg:py-16 px-4 lg:px-8 border-b-4 lg:border-b-0 lg:border-r-4 border-black w-full lg:w-1/4">
                <button onClick={handleAllNews} className={`${btnStyle1} border-2 border-white bg-black text-white py-2 rounded-lg hover:bg-slate-700`}>
                    All News
                </button>
                <button onClick={handleRecentNews} className={`${btnStyle2} border-2 border-white bg-black text-white py-2 rounded-lg hover:bg-slate-700`}>
                    Latest News
                </button>
                <button onClick={handlePreviousNews} className={`${btnStyle3} border-2 border-white bg-black text-white py-2 rounded-lg hover:bg-slate-700`}>
                    Previous News
                </button>
                <Link to="/profile" className="border-2 border-white bg-black text-white py-2 rounded-lg text-center hover:bg-slate-700">
                    Profile
                </Link>
            </div>

            {/* Main Content */}
            <div className={`${hide} text-center mx-auto mt-10 lg:mt-16 text-black px-6 lg:px-10 w-full`}>
                <div className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 pb-4 lg:pb-6 border-b-4 mx-auto border-black">
                    Welcome To Our Blog
                </div>
                <div className="text-base lg:text-lg font-medium mb-6 lg:mb-10">
                    Welcome to the Gaming Conventions Central Blog!
                    Our blog is your go-to source for the latest news, insights, and stories from the world of gaming conventions.
                </div>
                <div className="text-left bg-gray-900 py-6 lg:py-7 px-6 lg:px-10 rounded-xl lg:rounded-2xl text-white mb-12 lg:mb-20">
                    <p className="text-2xl lg:text-3xl text-center font-bold mb-8 lg:mb-10">
                        Categories
                    </p>
                    <p className="text-base lg:text-xl font-medium mb-8 lg:mb-10">
                        <span className="text-lg lg:text-2xl font-semibold">Event Previews:</span> Get the lowdown on upcoming conventions, including schedules, featured guests, and what to expect.
                    </p>
                    <p className="text-base lg:text-xl font-medium mb-8 lg:mb-10">
                        <span className="text-lg lg:text-2xl font-semibold">Convention Reviews:</span> Read our in-depth reviews of past events, complete with photos, videos, and personal insights.
                    </p>
                    <p className="text-base lg:text-xl font-medium mb-8 lg:mb-10">
                        <span className="text-lg lg:text-2xl font-semibold">Tips & Guides:</span> Find helpful tips for attending conventions, from packing lists to navigating large event spaces.
                    </p>
                    <p className="text-base lg:text-xl font-medium mb-8 lg:mb-10">
                        <span className="text-lg lg:text-2xl font-semibold">Interviews:</span> Enjoy exclusive interviews with game developers, industry insiders, and notable figures in the gaming community.
                    </p>
                    <p className="text-base lg:text-xl font-medium mb-8 lg:mb-10">
                        <span className="text-lg lg:text-2xl font-semibold">Community Stories:</span> Hear from fellow gamers about their convention experiences and the friends they have made along the way.
                    </p>
                    <p className="text-base lg:text-xl font-medium">
                        <span className="text-lg lg:text-2xl font-semibold">Industry News:</span> Stay up-to-date with the latest news and trends in the gaming industry.
                    </p>
                </div>
                <div className="text-base lg:text-xl font-medium mb-6 lg:mb-10">
                    Join the Conversation
                    We love hearing from our readers! Share your thoughts on our blog posts, ask questions, and join the conversation in the comments section below each article.
                </div>
            </div>

            {/* News Sections */}
            <div className="w-full lg:w-2/4 bg-gray-100 lg:bg-white px-4 lg:px-10 overflow-y-auto">
                <div className={`${allNewsHide}`} style={{ height: 1300 }}>
                    <h1 className="text-3xl lg:text-4xl px-8 lg:px-28 mx-auto mt-10 lg:mt-16 text-black font-bold mb-12 lg:mb-16 border-b-4 pb-4 lg:pb-6 border-black">
                        All News
                    </h1>
                    {allNews.map(data => <MixNews key={data.id} data={data}></MixNews>)}
                    <RecentNews />
                    <PreviousNews />
                </div>

                <div className={`${recentNewsHide}`} style={{ height: 1300 }}>
                    <h1 className="text-3xl lg:text-4xl px-8 lg:px-20 mx-auto mt-10 lg:mt-16 text-black font-bold pb-4 lg:pb-6 mb-12 lg:mb-16 border-b-4 border-black">
                        Latest News
                    </h1>
                    <RecentNews />
                </div>

                <div className={`${previousNewsHide}`} style={{ height: 1300 }}>
                    <h1 className="text-3xl lg:text-4xl px-8 lg:px-16 mx-auto mt-10 lg:mt-16 text-black font-bold mb-12 lg:mb-16 border-b-4 pb-4 lg:pb-6 border-black">
                        Previous News
                    </h1>
                    <PreviousNews />
                </div>
            </div>

            {/* Auth Section */}
            <div className="border-t-4 lg:border-t-0 lg:border-l-4 border-black flex flex-col gap-4 font-bold text-lg lg:text-xl bg-gray-100 py-8 lg:py-16 px-4 lg:px-8 w-full lg:w-2/4">
                <Link to="/login" className="border-2 border-white bg-black text-white py-2 rounded-lg text-center hover:bg-slate-700">
                    Login
                </Link>
                <Link to="/register" className="border-2 border-white bg-black text-white py-2 rounded-lg text-center hover:bg-slate-700">
                    Register
                </Link>
                <h1 className="text-center font-bold text-black">or</h1>
                <button onClick={handleToGoogle} className="border-2 border-white bg-blue-700 text-white py-2 rounded-lg flex justify-center items-center gap-4 hover:bg-blue-900">
                    <FaGoogle />
                    <span>Sign Up With Google</span>
                </button>
                <button className="border-2 border-white bg-black text-white py-2 rounded-lg flex justify-center items-center gap-4 hover:bg-slate-700">
                    <FaGithub />
                    <span>Sign Up With GitHub</span>
                </button>
                <button className="border-2 border-white bg-blue-800 text-white py-2 rounded-lg flex justify-center items-center gap-4 hover:bg-blue-900">
                    <FaFacebook />
                    <span>Sign Up With Facebook</span>
                </button>
            </div>
        </div>
    );
};

export default Blog;




