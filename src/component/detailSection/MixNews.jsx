import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

const MixNews = ({ data }) => {
    const [short, setShort] = useState(data.description.slice(0, 150));
    const [hidden, setHidden] = useState('');
    const [like, setLike] = useState(data.likes);

    const handleSeeMore = () => {
        setShort(data.description);
        setHidden('hidden');
    };

    const handleLikes = () => {
        if (data.likes >= like) {
            setLike(like + 1);
        } else if (data.likes <= like) {
            setLike(like - 1);
        }
    };

    return (
        <div className="bg-white mb-10 border-2 md:border-4 border-black px-4 md:px-10 pt-5 pb-10 rounded-lg">
            <img
                className="mx-auto mb-7 rounded-lg w-full h-auto max-w-full md:max-w-4xl"
                src={data.img}
                alt=""
            />
            <h1 className="text-black font-bold mb-3 px-4 md:px-16 text-xl md:text-2xl">
                {data.title}
            </h1>
            <h1 className="text-black font-medium mb-3 px-4 md:px-16 text-base md:text-lg">
                {short}{" "}
                <span
                    className={`${hidden} text-red-500 cursor-pointer`}
                    onClick={handleSeeMore}
                >
                    see more...
                </span>
            </h1>
            <div className="flex flex-col md:flex-row justify-between mt-10 px-4 md:px-16">
                <button
                    onClick={handleLikes}
                    className="text-white font-medium mb-3 px-8 md:px-10 rounded-xl py-2 text-base md:text-lg flex gap-1 items-center bg-red-400 hover:bg-red-600"
                >
                    <AiFillLike className="text-orange-200" /> {like}
                </button>
                <div className="flex gap-4 md:gap-6 mt-4 md:mt-0">
                    <h1 className="text-orange-300 font-medium text-base md:text-lg flex gap-1 items-center">
                        <FaClock className="text-orange-500" /> {data.publish_time}
                    </h1>
                    <h1 className="text-orange-300 font-medium text-base md:text-lg flex gap-1 items-center">
                        <FaCalendar className="text-orange-500" /> {data.time}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default MixNews;

MixNews.propTypes = {
    data: PropTypes.shape({
        description: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        publish_time: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
    }).isRequired,
};
