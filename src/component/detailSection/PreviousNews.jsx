import { useEffect, useState } from "react";

import PreviousNewsPer from "./PreviousNewsPer";


const PreviousNews = () => {
    // const previousNews = useLoaderData();
    // const [hidden , setHidden] = useState('');
const [previousNews, setPreviousNews] = useState([])

useEffect(()=>{
fetch(`previousnews.json`)
.then(res => res.json())
.then(data => setPreviousNews(data))
},[])
    // const [short , setShort] = useState(data.description.slice(0 , 150));

    // console.log(previousNews)

    
    return (
        <div>

            {
                previousNews.map(data=> <PreviousNewsPer key={data.id} data={data}></PreviousNewsPer>
               
                )
            }
        </div>
    );
};

export default PreviousNews;