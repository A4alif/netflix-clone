import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);
  
  const truncateString = (str, num) => {
    if(str?.length > num){
        return str.slice(0, num) + "..."
    }else {
        return str;
    }
  }

  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute 2-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-8">{movie?.title}</h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-6 ">
                Play
              </button>
              <button className="border  text-white border-gray-300 py-2 px-6 ml-4 ">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm my-2">Released: {movie?.release_date}</p>
            <p className="w-full md:max-w[60%] lg:max-w-[50%] xl:max-w-[50%] text-gray-200">{truncateString(movie?.overview, 150)}</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
