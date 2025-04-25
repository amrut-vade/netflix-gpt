import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';    

const Maicontainer =()=>{
   // get data from store 
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
    if(movies === null) return;
    const mainMovie = movies[1];
    console.log(mainMovie);
    // destrued object
    const {original_title, overview, id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId ={id}/>
    </div>
  )
}

export default Maicontainer;

// className='pt-[30%] bg-black md:pt-0'