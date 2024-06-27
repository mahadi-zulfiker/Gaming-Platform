import { checkPropTypes as PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Contain = ({ data }) => {

    // console.log(data)

    return (
        <div className="flex items-center gap-16 border-4 bg-stone-200 text-black border-orange-500 rounded-xl py-6 px-6 my-10 ">

            <img className="w-96 h-72 border-orange-500 border-4 rounded-lg" src={data.image} alt="" />

            <div className="">

                <p className="text-3xl text-orange-500 font-semibold underline">{data.title}</p>
                <p className="text-lg font-medium mt-4 ">{data.description}</p>

                <div className="flex justify-between mt-5 items-center">

                    <div className="">
                        <p className="text-lg font-medium text-slate-600"> Date: <span className="text-orange-500 font-semibold">{data.date}</span></p>
                        <p className="text-lg font-medium text-slate-600 my-1"> Time: <span className="text-orange-500 font-semibold">{data.time}</span></p>
                        <p className="text-lg font-medium text-slate-600">Price: <span className="text-orange-500 font-semibold">{data.price}</span></p>
                    </div>

                    <div className="">
                       <Link to={`/buy-ticket/${data.id}`}> <button className="px-7 py-3 text-white rounded-lg hover:bg-orange-600 hover:mr-2 hover:px-6 hover:py-2.5  bg-orange-500 font-semibold text-xl border-red-300 border-4">Purchase</button>
                   </Link> 
                   </div>

                </div>

            </div>



        </div>
    );
};

export default Contain;





Contain.propTypes = {
    data: PropTypes.function
}