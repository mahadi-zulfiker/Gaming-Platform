import { useState } from "react"
// import img1 from "https://i.ibb.co/TWVDMkF/1695126272177.jpg"
// import img2 from "../pic/banner/gaming-conventions-1850-x-1200-wallpaper-0o93wyp028jrjcfs.jpg"
// import img3 from "../pic/banner/gaming-conventions-8cb6ies4uumt4fxj.jpg"
// import img4 from "../pic/banner/Gaming_Industry_Page_body_image.webp"
// import img5 from "../pic/banner/GIRLGAMER_Stage.jpg"


const Banner = () => {
const img1 = "https://i.ibb.co/TWVDMkF/1695126272177.jpg";
const img2 = "https://i.ibb.co/8dVCVKn/Gaming-Industry-Page-body-image.webp";
const img3 = "https://i.ibb.co/qxzQ71d/gaming-conventions-8cb6ies4uumt4fxj.jpg";
const img4 = "https://i.ibb.co/R6vp2P5/gaming-conventions-1850-x-1200-wallpaper-0o93wyp028jrjcfs.jpg";
const img5 = "https://i.ibb.co/br3zMrw/GIRLGAMER-Stage.jpg";


    const img = [img1, img2, img3, img4, img5]
    const [idx, setIdx] = useState(0);
    const [style, setStyle] = useState('white')
    const [style1, setStyle1] = useState('black')
    const [style2, setStyle2] = useState('black')
    const [style3, setStyle3] = useState('black')
    const [style4, setStyle4] = useState('black')

    // const [count, setCount] = useState(0)
    // const handleLeft = () => {
    //     setIdx(() => {
    //         if (idx === 0) {
    //             return img.length - 1
    //         }
    //         return idx - 1
    //     })
    // }
    // const handleRight = () => {
    //     setIdx(() => {
    //         if (idx === img.length - 1) {
    //             return 0
    //         }
    //         return idx + 1
    //     })
    // }

    // const handleBtnOne = () => {
    //     return setIdx(0);
    // }
    // const handleBtnTwo = () => {
    
    //     return setIdx(1);
    // }
    // const handleBtnThree = () => {
  
    //     return setIdx(2);
    // }
    // const handleBtnFour = () => {

    //     return setIdx(3);
    // }
    // const handleBtnFive = () => {
 
    //     return setIdx(4);
    // }

    setTimeout( () =>{

        if (idx === 4) {
             setStyle('white');
             setStyle4('black');
          return setIdx(0);
        }
        if (idx === 3) {
            setStyle4('white');
            setStyle3('black');
            return setIdx(idx+1)
        }
        if (idx === 2) {
            setStyle3('white');
            setStyle2('black');
            return setIdx(idx+1)
        }
        if (idx === 1) {
            setStyle2('white');
            setStyle1('black');
            return setIdx(idx+1)
        }
        if (idx === 0) {
            setStyle1('white');
            setStyle('black');
            return setIdx(idx+1)
        }

      }  , 4000)


// console.log(idx)
   




    return (
        <div className="mt-10">

            <img className=" rounded-lg border-4 border-black" src={img[idx]} alt="" style={{ width: 1250, height: 700 }} />

            {/* <button className="border-2 p-3 bg-red-700 mx-10" onClick={handleLeft}>left</button>
            <button className="border-2 p-3 bg-red-700 " onClick={handleRight}>right</button> */}
            <div className="flex gap-5 justify-center relative bottom-14">
                <button className={`border-sky-300 border-2 rounded-full p-1 bg-${style} hover:bg-slate-950`}></button>
                <button className={`border-sky-300 border-2 rounded-full p-1 bg-${style1} hover:bg-slate-950`}></button>
                <button className={`border-sky-300 border-2 rounded-full p-1 bg-${style2} hover:bg-slate-950`}></button>
                <button className={`border-sky-300 border-2 rounded-full p-1 bg-${style3} hover:bg-slate-950`}></button>
                <button className={`border-sky-300 border-2 rounded-full p-1 bg-${style4} hover:bg-slate-950`}></button>
            </div>
        </div>



    );
};

export default Banner;