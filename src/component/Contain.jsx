import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Contain = ({ data }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16 border-4 bg-stone-200 text-black border-orange-500 rounded-xl py-6 px-4 lg:px-6 my-10">
            <img className="w-full max-w-md h-auto border-orange-500 border-4 rounded-lg" src={data.image} alt={data.title} />

            <div className="w-full max-w-lg">
                <p className="text-2xl lg:text-3xl text-orange-500 font-semibold underline">{data.title}</p>
                <p className="text-base lg:text-lg font-medium mt-4">{data.description}</p>

                <div className="flex flex-col lg:flex-row justify-between mt-5 items-center">
                    <div>
                        <p className="text-base lg:text-lg font-medium text-slate-600">Date: <span className="text-orange-500 font-semibold">{data.date}</span></p>
                        <p className="text-base lg:text-lg font-medium text-slate-600 my-1">Time: <span className="text-orange-500 font-semibold">{data.time}</span></p>
                        <p className="text-base lg:text-lg font-medium text-slate-600">Price: <span className="text-orange-500 font-semibold">{data.price}</span></p>
                    </div>

                    <div className="mt-4 lg:mt-0">
                        <Link to={`/buy-ticket/${data.id}`}>
                            <button className="px-5 lg:px-7 py-2 lg:py-3 text-white rounded-lg hover:bg-orange-600 bg-orange-500 font-semibold text-lg lg:text-xl border-red-300 border-4">
                                Purchase
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Contain.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
};

export default Contain;
