import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = ()=>{
     // dispatch action 
     const dispatch = useDispatch()
           


     const getpopularMovie = async ()=>{
        
         const data =  await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS

         );
          const json = await data.json();
          console.log(json.
            results
            );

            dispatch(addPopularMovies(json.results))

     }

       useEffect(()=>{
        getpopularMovie();
       },[])
}

export default usePopularMovies;