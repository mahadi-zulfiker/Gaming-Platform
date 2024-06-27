import { checkPropTypes as PropTypes } from "prop-types";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";


const MixNews = ({ data }) => {
    // console.log(data)
    const [short, setShort] = useState(data.description.slice(0, 150));
    const [hidden, setHidden] = useState('');
    const [like, setLike] = useState(data.likes);

    const handleSeeMore = () => {
        setShort(data.description);
        setHidden('hidden')

    }
    const handleLikes = () => {
        if(data.likes >= like){
            setLike(like + 1)
            console.log(like)
        }
      else if(data.likes <= like){
        console.log()
       setLike(like - 1)
      }  
        
    }

    return (
        <div className="bg-white mb-10  border-4 border-black px-10 mr-5 pt-5 pb-10 rounded-lg">
            <img className="mx-auto m-7 rounded-lg" style={{ width: 800, height: 400 }} src={data.img} alt="" />
            <h1 className="text-black font-bold mb-3 ps-16 pr-16 text-2xl">{data.title}</h1>
            <h1 className="text-black font-medium mb-3 ps-16 pr-16 text-lg">{short} <span className={` ${hidden} text-red-500 cursor-pointer`} onClick={handleSeeMore}>see more...</span> </h1>
            <div className="flex justify-between mt-10">
                <button onClick={handleLikes} className="text-white font-medium mb-3 ms-16 px-10 rounded-xl py-2 text-lg flex gap-1 items-center bg-red-400 hover:bg-red-600  "> <AiFillLike className="text-orange-200" /> {like}</button>
                <div className="flex gap-6 mr-6">
                    <h1 className="text-orange-300 font-medium mb-3  text-lg flex gap-1 items-center"> <FaClock className="text-orange-500" /> {data.publish_time}</h1>
                    <h1 className="text-orange-300 font-medium mb-3  text-lg flex gap-1 items-center"> <FaCalendar className="text-orange-500" /> {data.time}</h1>
                </div>
            </div>
        </div>
    );
};

export default MixNews;



MixNews.propTypes = {
    data: PropTypes.node
}