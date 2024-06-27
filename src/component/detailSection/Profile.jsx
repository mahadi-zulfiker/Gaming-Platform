import { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";



const Profile = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user.reloadUserInfo)
    const [img, setImg] = useState(user.reloadUserInfo.photoUrl ? user.reloadUserInfo.photoUrl : 'https://i.ibb.co/JpvKXh7/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTAx-L3-Jt-Nj-A5-LXNvb-Glka-WNvbi13-LTAw-Mi1w-Ln-Bu.webp');

    const handleChange = (e) => {
        console.log(e.target.files);

        setImg(URL.createObjectURL(e.target.files[0]));
    }


    const handleSignOut = () => {
        logOut();
    }
    return (
        <div className="pt-16 pb-32">
            {/* <img className="rounded-full w-44 h-44" src={user.reloadUserInfo.photoUrl} alt="" /> */}
            <div className="flex justify-center ms-96 ps-16 gap-10 mt-10  items-center">
                <img className="rounded-full w-44 h-44" src={img} alt="" />

                <input className="w-28 z-10 opacity-0 h-7 px-20 bg-red-700" onChange={handleChange} type="file" placeholder="add image" src="" alt="" />
                <p className="relative right-52 bg-black text-white py-3 px-9 rounded-lg">upload image</p>
                <div> </div>

            </div>
            <p className="text-center font-bold text-black text-2xl mt-10">Name: {user.reloadUserInfo.displayName}</p>
            <p className="text-center font-bold text-black text-xl mt-4">Email: {user.reloadUserInfo.email}</p>
            <div className="flex justify-center mt-7">
                <button onClick={handleSignOut} className="py-3 w-44 text-white px-9 rounded font-bold text-lg bg-red-500 hover:bg-red-300">Sign Out</button>
            </div>

        </div>
    );
};

export default Profile;