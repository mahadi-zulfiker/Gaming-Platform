import { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";

const Profile = () => {
    const { user, logOut, updateProfileImage } = useContext(AuthContext);
    const [img, setImg] = useState(
        user.reloadUserInfo.photoUrl
            ? user.reloadUserInfo.photoUrl
            : "https://i.ibb.co/JpvKXh7/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTAx-L3-Jt-Nj-A5-LXNvb-Glka-WNvbi13-LTAw-Mi1w-Ln-Bu.webp"
    );

    const handleChange = (e) => {
        const newImg = URL.createObjectURL(e.target.files[0]);
        setImg(newImg);
        updateProfileImage(newImg); // Update profile image in context
    };

    const handleSignOut = () => {
        logOut();
    };

    return (
        <div className="pt-16 pb-32 px-6 lg:px-32">
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-10 mt-10">
                <img className="rounded-full w-32 h-32 lg:w-44 lg:h-44" src={img} alt="Profile" />

                <div className="relative mt-4 lg:mt-0">
                    <input
                        className="absolute w-full h-full opacity-0 cursor-pointer"
                        onChange={handleChange}
                        type="file"
                    />
                    <p className="py-2 px-6 text-white bg-black rounded-lg cursor-pointer">
                        Upload Image
                    </p>
                </div>
            </div>

            <p className="text-center font-bold text-black text-xl lg:text-2xl mt-6">
                Name: {user.reloadUserInfo.displayName}
            </p>
            <p className="text-center font-bold text-black text-lg lg:text-xl mt-2 lg:mt-4">
                Email: {user.reloadUserInfo.email}
            </p>

            <div className="flex justify-center mt-7">
                <button
                    onClick={handleSignOut}
                    className="py-3 px-9 w-full lg:w-44 text-white font-bold text-lg bg-red-500 hover:bg-red-300 rounded"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Profile;

