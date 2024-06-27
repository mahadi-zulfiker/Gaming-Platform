import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


const Register = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        createUser(email, password)
            .then((result) => {
                navigate(location?.state ? location.state : "/");
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    const handleToGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })

    }


    return (
        <div className='bg-white   mt-20 mb-20'>
            <div className="bg-sky-300 flex gap-16 justify-center items-center mx-auto rounded-xl  bg-[url('/pic-bg/bg-5.jpg')] bg-no-repeat bg-cover pr-10 py-9 w-9/12">
            
                <div className='ms-10'>
                    <p className='text-lg font-semibold mb-10 text-center text-white'>Already have an account ? <Link className='text-sky-200 underline' to="/login">Login</Link></p>

                    <button className="py-3 flex items-center gap-2 mx-auto text-white px-9 rounded font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500  hover:bg-red-300" onClick={handleToGoogle}> <FcGoogle className='w-6 h-6 bg-white rounded-full'></FcGoogle> Continue to Google</button>
                </div>

                <p className='text-center text-3xl text-white font-bold my-5'>or</p>

                <div >
                    <h1 className='text-4xl font-bold -ms-14 mb-8 mt-7 border-b-4 w-36 border-white pb-2 text-white px-1'>Register</h1>
                    <form onSubmit={handleRegister} className="mb-20 mt-16bg-[#ffffff47]  rounded-xl p-2 ">
                        <div className="mb-5 mt-5 ms-12 ">
                            <label className="label">
                                <span className=" text-lg font-semibold text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="w-96 py-3 px-5 border-white placeholder:text-white placeholder:font-semibold text-lg bg-[#4479ff3f] border-b-2 text-white font-semibold rounded" required />
                        </div>
                        <div className="ms-12">
                            <label className="label">
                                <span className="text-lg font-semibold text-white">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="w-96 py-3 px-5 border-white placeholder:text-white placeholder:font-semibold text-lg bg-[#235dfc3f] border-b-2 text-white font-semibold rounded" required />

                        </div>
                        <div className="">
                            <button className="py-3 text-white w-80 mx-20 mt-10 mb-5 px-9 rounded-xl font-bold text-lg border-white border-2 bg-[#4049eb] hover:bg-[#5082ffac]">Register</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>


    );
};

export default Register;