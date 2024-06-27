import { checkPropTypes } from "prop-types";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

const RecentNewsPer = ({data}) => {


    const [like, setLike] = useState(data.likes);

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
        <div>
            <div className="bg-white mb-10 border-4 border-black px-10 mr-5 pb-10 pt-5 rounded-xl">
            <img className="mx-auto m-7 rounded-lg" style={{ width: 800 ,height:400}} src={data.img} alt="" />
            <h1 className="text-black font-bold mb-3 ps-16 pr-16 text-2xl">{data.title}</h1>
            <h1 className="text-black font-medium mb-3 ps-16 pr-16 text-lg">{data.description}  </h1>
            <div className="flex justify-between mt-10">
                <button onClick={()=>handleLikes(data.likes)} className="text-white font-medium mb-3 ms-16 px-10 rounded-xl py-2 text-lg flex gap-1 items-center bg-red-400 hover:bg-red-600  "> <AiFillLike className="text-orange-200"/>  {like?like:data.likes}</button>
                <div className="flex gap-6 mr-6">
                    <h1 className="text-orange-300 font-medium mb-3  text-lg flex gap-1 items-center"> <FaClock className="text-orange-500"/> {data.publish_time}</h1>
                    <h1 className="text-orange-300 font-medium mb-3  text-lg flex gap-1 items-center"> <FaCalendar className="text-orange-500"/> {data.time}</h1>
                </div>
            </div>
        </div>
        </div>
    );
};

export default RecentNewsPer;

RecentNewsPer.propTypes = {
    data: checkPropTypes.node
}