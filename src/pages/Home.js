import React from 'react'
import Main from '../components/Main'
import Raw from '../components/Raw'
import request from '../Requests';

const Home = () => {
  return (
    <>
       <Main />
       <Raw rowId='1' title="Now Playing"   fetchUrl = {request.requestNowPlaying} />
       <Raw rowId='2' title="Upcomming"   fetchUrl = {request.requestUpcomming} />
       <Raw rowId='3' title="Popular"     fetchUrl = {request.requestPopular} />
       <Raw rowId='4' title="Top Rated"   fetchUrl = {request.requesttopRated} />
    </>
  )
}

export default Home