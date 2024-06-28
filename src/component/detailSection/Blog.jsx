import { Link, useLoaderData } from "react-router-dom";
import MixNews from "./MixNews";
import RecentNews from "./RecentNews";
import PreviousNews from "./PreviousNews";
import { useContext, useState } from "react";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../auth/AuthProvider";



const Blog = () => {

    const {  signInWithGoogle } = useContext(AuthContext);

    const [allNewsHide, setAllNewsHide] = useState('hidden');
    const [btnStyle1, setBtnStyle1] = useState('no-underline');
    const [btnStyle2, setBtnStyle2] = useState('no-underline');
    const [btnStyle3, setBtnStyle3] = useState('no-underline');
    // const [btnStyle4, setBtnStyle4] = useState('no-underline');
    const [recentNewsHide, setRecentNewsHide] = useState('hidden');
    const [previousNewsHide, setPreviousNewsHide] = useState('hidden');
    const [hide, setHide] = useState('');
    const allNews = useLoaderData();

    const handleAllNews = () => {
        setRecentNewsHide('hidden');
        setPreviousNewsHide('hidden');
        setAllNewsHide('block');
        setHide('hidden');
        setBtnStyle1('underline decoration-white')
        setBtnStyle2('no-underline decoration-white')
        setBtnStyle3('no-underline decoration-white')
        // setBtnStyle4('no-underline decoration-white')
    }
    const handleRecentNews = () => {
        setRecentNewsHide('block');
        setPreviousNewsHide('hidden');
        setAllNewsHide('hidden')
        setHide('hidden');
        setBtnStyle2('underline decoration-white')
        setBtnStyle1('no-underline decoration-white')
        setBtnStyle3('no-underline decoration-white')
        // setBtnStyle4('no-underline decoration-white')
    }
    const handlePreviousNews = () => {
        setRecentNewsHide('hidden');
        setPreviousNewsHide('block');
        setHide('hidden');
        setAllNewsHide('hidden');
        setBtnStyle3('underline decoration-white')
        setBtnStyle2('no-underline decoration-white')
        setBtnStyle1('no-underline decoration-white')
        // setBtnStyle4('no-underline decoration-white')
    }

    const handleToGoogle=()=>{
        signInWithGoogle()
        .then((result) => {
            console.log(result);
                        })
            .catch((error)=>{
                console.log(error);
            })      
    }


    return (
        <div className=" bg-white flex border-t-4 border-black ">
            <div className={` flex flex-col gap-7 font-bold text-xl bg- py-16 px-10  border-r-4 border-black`} style={{ height: 1300, width: 330 }}>
                <button onClick={handleAllNews} className={`${btnStyle1} border-4 border-white  bg-black text-white py-2 rounded-lg  px-12 hover:bg-slate-700`}>All News</button>
                <button onClick={handleRecentNews} className={`${btnStyle2} border-4 border-white  bg-black text-white py-2 rounded-lg  px-12 hover:bg-slate-700`}>Latest News</button>
                <button onClick={handlePreviousNews} className={`${btnStyle3} border-4 border-white  bg-black text-white py-2 rounded-lg  px-12 hover:bg-slate-700`}>Previous News</button>
                <Link to="/profile" className="border-4 border-white text-center bg-black text-white py-2 rounded-lg  px-12 hover:bg-slate-700">Profile</Link>
            </div>


            <div className={`${hide} text-center mx-auto mt-16 text-black ps-10`} style={{ height: 1300, width: 800 }}>
                <div className="text-4xl font-bold mb-12 px-20 pb-6 border-b-4 mx-auto w-3/4 border-black">
                    Welcome To Our Blog
                </div>
                <div className="text-xl font-medium mb-10 ">
                    Welcome to the Gaming Conventions Central Blog!
                    Our blog is your go-to source for the latest news, insights, and stories from the world of gaming conventions. Whether you are looking for updates on upcoming events, tips for making the most of your convention experience, or behind-the-scenes looks at your favorite gatherings, our blog has something for every gaming enthusiast.
                </div>
                <div className="text-left bg-gray-900 py-7 px-10 rounded-2xl text-white mb-20" >
                    <p className="text-3xl text-center font-bold mb-10">
                        Categories
                    </p>
                    <p className="text-xl font-medium mb-10">
                        <span className="text-2xl font-semibold">Event Previews:</span> Get the lowdown on upcoming conventions, including schedules, featured guests, and what to expect.
                    </p>
                    <p className="text-xl font-medium mb-10">
                        <span className="text-2xl font-semibold">Convention Reviews:</span> Read our in-depth reviews of past events, complete with photos, videos, and personal insights.
                    </p>
                    <p className="text-xl font-medium mb-10">
                        <span className="text-2xl font-semibold"> Tips & Guides:</span> Find helpful tips for attending conventions, from packing lists to navigating large event spaces.
                    </p>
                    <p className="text-xl font-medium mb-10">
                        <span className="text-2xl font-semibold">Interviews:</span> Enjoy exclusive interviews with game developers, industry insiders, and notable figures in the gaming community.
                    </p>
                    <p className="text-xl font-medium mb-10">
                        <span className="text-2xl font-semibold">Community Stories:</span> Hear from fellow gamers about their convention experiences and the friends they have made along the way.
                    </p>
                    <p className="text-xl font-medium mb-10">
                        <span className="text-2xl font-semibold"> Industry News:</span> Stay up-to-date with the latest news and trends in the gaming industry.
                    </p>
                </div>
                <div className="text-xl font-medium mb-10">
                    Join the Conversation
                    We love hearing from our readers! Share your thoughts on our blog posts, ask questions, and join the conversation in the comments section below each article. You can also follow us on Twitter, Facebook, and Instagram for more updates and community interactions.
                </div>
            </div>


            <div className="bg- ps-10 " style={{ height: 1300 }}>

                <div className={`${allNewsHide} overflow-y-auto `} style={{ height: 1300, width: 800 }}>

                    <h1 className="text-4xl px-28 mx-auto mt-10 text-black font-bold mb-16 border-b-4 pb-6 w-96 border-black">All News</h1>
                    {
                        allNews.map(data => <MixNews key={data.id} data={data}></MixNews>)
                    }
                    <RecentNews ></RecentNews>
                    <PreviousNews></PreviousNews>

                </div>

                <div className={`${recentNewsHide} overflow-y-auto `} style={{ height: 1300, width: 800 }}>

                    <h1 className='text-4xl px-20 mx-auto mt-10 text-black font-bold pb-6 w-96 mb-16 border-b-4  border-black'>
                        Latest News
                    </h1>
                    <RecentNews ></RecentNews>
                </div>

                <div className={`${previousNewsHide} overflow-y-auto`} style={{ height: 1300, width: 800 }}>
                    <h1 className='text-4xl px-16 mx-auto mt-10 text-black font-bold mb-16 border-b-4 pb-6 w-96 border-black'>
                        Previous News
                    </h1>
                    <PreviousNews></PreviousNews>
                </div>

            </div>
            <div className="border-s-4 border-black flex flex-col  gap-7 font-bold text-xl bg- py-16 px-10 " style={{ height: 1300, width: 330 }}>
                <Link className={` border-4 border-white  bg-black text-white py-2 rounded-lg text-center px-12 hover:bg-slate-700`} to="/login">
                    login</Link>
                    <Link className={` border-4 border-white  bg-black text-white py-2 rounded-lg text-center px-12 hover:bg-slate-700`}  to="/register">
             register
                </Link>
                <h1 className="text-center font-bold text-black">or</h1>
                <button onClick={handleToGoogle} className={` border-4 border-white  bg-black text-white py-2 text-sm rounded-lg  px-12 flex items-center gap-1 hover:bg-slate-700`}>
                    <FaGoogle className="w-8 h-8 " />
                    Sign in with google
                </button>
                <button  onClick={handleToGoogle} className={` border-4 border-white  bg-black text-white py-2 text-sm hover:bg-slate-700 rounded-lg flex items-center gap-1 px-12 `}>
                    <FaFacebook className="w-10 h-10" />Sign in with facebook
                </button>
                <button  onClick={handleToGoogle} className={` border-4 border-white  bg-black text-white py-2 text-sm hover:bg-slate-700 rounded-lg  px-12 flex items-center gap-1`}>
                    <FaGithub className="w-7 h-7" />  Sign in with github
                </button>

            </div>

        </div>
    );
};

export default Blog;



