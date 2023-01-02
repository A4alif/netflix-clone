import React from 'react'
import Main from '../components/Main'
import Raw from '../components/Raw'
import request from '../Requests';

const Home = () => {
  return (
    <>
       <Main />
       <Raw title="Now Playing"   fetchUrl = {request.requestNowPlaying} />
       <Raw title="Upcomming"   fetchUrl = {request.requestUpcomming} />
       <Raw title="Popular"     fetchUrl = {request.requestPopular} />
       <Raw title="Top Rated"   fetchUrl = {request.requesttopRated} />
    </>
  )
}

export default Home