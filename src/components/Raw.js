import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Movie from './Movie';

const Raw = ({title, fetchUrl}) => {
   const [movies, setMovies] = useState([])
   

   useEffect( () => {
        axios.get(fetchUrl)
        .then((res) => {
            setMovies(res.data.results);
        })
   }, [fetchUrl])
    
   console.log(movies);
  return (
    <>
        <div>
            <h2 className='text-white font-bold md:text-xl p-4 mt-8'>{title}</h2>
            <div>
                <div id='slider'>
                    {movies.map( (movie, id) => (
                        <Movie movie = {movie} key={id} />
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Raw