import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
// console.log(location)
    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(e)
        // const form =;
        const email =  e.target.email.value;
        const password =  e.target.password.value;
        // console.log(email, password)
        signIn(email, password)
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
                navigate(location?.state ? location.state : "/");
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <div className='bg-white   mt-20 mb-20'>
            <div  className="bg-sky-300 flex gap-3 justify-center items-center mx-auto rounded-xl bg-[url('/pic-bg/bg-4.jpg')] bg-no-repeat  pr-10 py-9 w-9/12">
            <div >
                <h1 className='text-4xl font-bold ms-96 mt-7 border-b-4 w-36 border-white pb-2 text-white px-6'>Login</h1>
                <form onSubmit={handleLogin} className="mb-20 mt-16">
                    <div className="mb-5 mt-5 ms-12 ">
                        <label className="label">
                            <span className=" text-lg font-semibold text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Enter Your Email" name='email' className="w-96 py-3 px-5 border-white placeholder:text-white placeholder:font-semibold text-lg bg-[#44ff573f] border-b-2 text-white font-semibold rounded" required />
                    </div>
                    <div className="ms-12">
                        <label className="label">
                            <span className="text-lg font-semibold text-white">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="w-96 py-3 px-5 border-white placeholder:text-white placeholder:font-semibold text-lg bg-[#31fc233f] border-b-2 text-white font-semibold rounded" required />
                        <label className="label">
                            <a href="#" className="text-lg font-semibold text-white">Forgot password?</a>
                        </label>
                    </div>
                    <div className="">
                        <button className="py-3 text-white w-80 mx-20 mt-5 px-9 rounded-xl font-bold text-lg border-white border-2 bg-[#40eb4b] hover:bg-[#56ff50ac]">Login</button>
                    </div>
                </form></div>

  <p className='text-center text-3xl text-white font-bold my-5'>or</p>

            <div className='ms-10'>
                <p className='text-lg font-semibold mb-10 text-white'>Don`t have an account ? <Link className='text-green-300 underline' to="/register">Register</Link></p>

              
                <button className="py-3 flex items-center gap-2 mx-auto text-white px-9 rounded font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500  hover:bg-red-300" onClick={handleToGoogle}> <FcGoogle className='w-6 h-6 bg-white rounded-full'></FcGoogle> Continue to Google</button>
            </div>
        </div>
        </div>

    );
};

export default Login;