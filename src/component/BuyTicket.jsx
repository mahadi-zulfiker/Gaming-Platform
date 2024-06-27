import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuyTicket = () => {

    const gamingConventions = useLoaderData();
    const { id } = useParams();
    // console.log(id) 
    const idString = JSON.parse(id);
    // console.log(gamingConventions)

    const ticket = gamingConventions.find(data => data.id === idString)
    console.log(ticket);

const handleNotify=()=>{
       toast("Sold Out !");
}
    return (
        <div>
            <div className="flex justify-center items-center gap-16 p-16">
                <img className="rounded-xl border-2 border-black" src={ticket.image} style={{ width: 810, height: 608 }} alt="" />
                <div>

                    <p className="text-3xl font-bold text-black mb-5">{ticket.title}</p>


                    <p className="text-lg font-semibold text-black mb-5">{ticket.description}</p>

                    <div className="bg-black p-10 rounded-2xl" style={{ width: 580 }}>
                        <p className="text-white font-bold text-xl mb-3">Gaming Convention Name</p>
                        <p className="text-lg font-bold text-black mb-5 text-center py-2 px-10 bg-white rounded-lg">{ticket.title}</p>
                        <div className="flex items-center justify-center gap-5  " >
                            <p className="text-lg font-semibold text-black mb-5 bg-white w-72 py-2 px-2 rounded-lg">Date: <span className="font-bold">{ticket.date}</span></p>
                            <p className="text-lg font-semibold text-black mb-5 bg-white w-72 py-2 px-2 rounded-lg"> Time: <span className="font-bold">{ticket.time}</span></p>
                        </div>

                        <p className="text-lg font-semibold text-black mb-5 bg-white w-44 py-2 mx-auto px-10 rounded-lg"> Price: <span className="font-bold">{ticket.price}</span></p>
                        <button onClick={handleNotify} className="w-96  mx-16 text-black font-bold text-xl rounded-xl px-16 py-3 bg-white hover:bg-slate-300">BUY</button> <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyTicket;