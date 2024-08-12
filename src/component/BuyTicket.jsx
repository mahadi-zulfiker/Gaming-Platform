import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuyTicket = () => {
    const gamingConventions = useLoaderData();
    const { id } = useParams();
    const idString = JSON.parse(id);
    const ticket = gamingConventions.find(data => data.id === idString);
    console.log(ticket);

    const handleNotify = () => {
        toast("Sold Out!");
    }

    return (
        <div className="p-4">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 p-4 lg:p-16">
                <img
                    className="rounded-xl border-2 border-black w-full max-w-lg h-auto"
                    src={ticket.image}
                    alt=""
                />
                <div className="w-full max-w-lg">
                    <p className="text-2xl lg:text-3xl font-bold text-black mb-5">{ticket.title}</p>
                    <p className="text-base lg:text-lg font-semibold text-black mb-5">{ticket.description}</p>

                    <div className="bg-black p-6 lg:p-10 rounded-2xl">
                        <p className="text-white font-bold text-lg lg:text-xl mb-3">Gaming Convention Name</p>
                        <p className="text-base lg:text-lg font-bold text-black mb-5 text-center py-2 px-4 lg:px-10 bg-white rounded-lg">{ticket.title}</p>

                        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-5 mb-5">
                            <p className="text-base lg:text-lg font-semibold text-black bg-white w-full lg:w-72 py-2 px-2 rounded-lg">Date: <span className="font-bold">{ticket.date}</span></p>
                            <p className="text-base lg:text-lg font-semibold text-black bg-white w-full lg:w-72 py-2 px-2 rounded-lg">Time: <span className="font-bold">{ticket.time}</span></p>
                        </div>

                        <p className="text-base lg:text-lg font-semibold text-black mb-5 bg-white w-44 py-2 mx-auto px-10 rounded-lg text-center">Price: <span className="font-bold">{ticket.price}</span></p>

                        <button onClick={handleNotify} className="w-full lg:w-96 mx-auto text-black font-bold text-lg lg:text-xl rounded-xl px-8 lg:px-16 py-3 bg-white hover:bg-slate-300">BUY</button>

                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyTicket;
