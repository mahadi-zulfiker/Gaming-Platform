// import { Link } from "react-router-dom";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Contain from "./Contain";
import { useState } from "react";


const Home = () => {

    const gamingConventions = useLoaderData();
const [hidden, setHidden] =useState();
    const [slicer, setSlicer] = useState(4);

    const handleSlicer = () => {
        setSlicer(12);
setHidden('hidden');
    }
// disable right click /////////////
    document.addEventListener('contextmenu', event => {
        event.preventDefault();
    });

    return (
        <div className="">
            <div className="mx-auto" style={{ width: 1250 }}>
                <Banner></Banner>

                <div className="text-black text-lg font-medium">

                    <h1 className="mx-auto w-3/4 text-4xl mt-16 text-black px-28 pb-6 border-b-4  border-black font-semibold">
                        Welcome to Gaming Conventions Central!
                    </h1>

                    <h3 className="text-xl mt-16 font-semibold text-black">
                        Your Ultimate Guide to the World of Gaming Gatherings
                    </h3>

                    <p className=" mt-4">
                        Step into the vibrant universe of gaming conventions where the excitement never stops! Whether you are a hardcore gamer, a cosplayer, an indie developer, or just someone who loves the thrill of gaming culture, Gaming Conventions Central is your one-stop destination for everything related to gaming events worldwide.
                    </p>

                    <p className=" mt-4">
                        <span className="text-xl font-semibold text-black underline"> Discover Upcoming Conventions</span> : Stay up-to-date with the latest conventions happening near you and around the globe. From major industry events to niche gatherings, our comprehensive calendar has it all.
                    </p>

                    <p className=" mt-4">
                        <span className="text-xl font-semibold text-black underline"> Read In-Depth Reviews</span> : Not sure which conventions to attend? Check out our detailed reviews and highlights from past events, complete with photos, videos, and firsthand experiences from fellow gamers.
                    </p>

                    <p className=" mt-4">
                        <span className="text-xl font-semibold text-black underline">  Exclusive Insights</span> : Get the inside scoop on special guests, exclusive game previews, panel discussions, and much more. We bring you the latest news and updates straight from the heart of the action.
                        At Gaming Conventions Central, we believe that every gamer should have the chance to experience the magic of these events. Let us be your guide as you explore, connect, and celebrate the world of gaming like never before.
                    </p>

                </div>


                <div className=" mb-32">
                    <h1 className="mx-auto w-1/2 text-4xl mt-16 text-black px-20 pb-6 border-b-4 border-black font-semibold">Latest Gaming Convention</h1>
                    {
                        gamingConventions.slice(0, slicer).map(data => <Contain key={data.id} data={data}></Contain>)
                    }
                </div>

                <div className="flex justify-center mb-16">
                    <button onClick={handleSlicer} className={` ${hidden} px-16  py-3 text-white rounded-lg hover:bg-orange-600 hover:mr-2 hover:px-14 hover:py-2.5  bg-orange-500 font-semibold text-xl border-red-300 border-4`} > See All</button>
                </div>

            </div>

        </div>
    );
};

export default Home;