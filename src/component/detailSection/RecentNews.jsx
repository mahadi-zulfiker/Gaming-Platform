import { useEffect, useState } from "react";

import RecentNewsPer from "./RecentNewsPer";


const RecentNews = () => {
 

    // const [short , setShort] = useState(data.description.slice(0 , 150));
// const [hidden , setHidden] = useState(''); 

const [recentNews, setRecentNews] = useState([])


useEffect(()=>{
fetch(`latestnews.json`)
.then(res => res.json())
.then(data => setRecentNews(data))
},[])




    return (
        <div>

            {
                recentNews.map(data=> <RecentNewsPer key={data.id} data={data}></RecentNewsPer>
          )
            }
             
        </div>
    );
};

export default RecentNews;