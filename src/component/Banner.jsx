import { useState } from "react";

const Banner = () => {
    const images = [
        "https://i.ibb.co/TWVDMkF/1695126272177.jpg",
        "https://i.ibb.co/8dVCVKn/Gaming-Industry-Page-body-image.webp",
        "https://i.ibb.co/qxzQ71d/gaming-conventions-8cb6ies4uumt4fxj.jpg",
        "https://i.ibb.co/R6vp2P5/gaming-conventions-1850-x-1200-wallpaper-0o93wyp028jrjcfs.jpg",
        "https://i.ibb.co/br3zMrw/GIRLGAMER-Stage.jpg"
    ];

    const [idx, setIdx] = useState(0);

    // Automatically change the image every 4 seconds
    setTimeout(() => {
        setIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
    }, 4000);

    return (
        <div className="mt-10">
            <img
                className="rounded-lg border-4 border-black mx-auto w-full max-w-screen-lg h-auto"
                src={images[idx]}
                alt=""
                style={{ maxHeight: "400px" }} // Responsive height
            />

            <div className="flex gap-5 justify-center mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`border-sky-300 border-2 rounded-full p-1 transition-all duration-300 ease-in-out ${
                            idx === index ? "bg-white" : "bg-black"
                        } hover:bg-slate-950`}
                        onClick={() => setIdx(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Banner;
