import React,{useState,useEffect} from "react";
import axios from '../axios'
import requests from '../requests/requests'
function Banner() {
    const[movie,setMovie] = useState({})
    useEffect(()=>{
        async const fetchData= ()=>{
            const request = await axios.get(requests.fetchTrending)
            setMovie[request.data.results[]]
        }
    },[])
  return (
    <header>
      <div className="Banner-image">
        <h1 className="banner-title">{title}</h1>
        <div className="banner-buttons">
          <button>Play</button>
          <button>Add to list</button>
        </div>
      </div>
      <div className="banner-dicription">

      </div>

      {/* back */}
      {/* title */}
      {/*  2buttons*/}
      {/* description */}
    </header>
  );
}

export default Banner;
