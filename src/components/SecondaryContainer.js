import { useSelector } from "react-redux";
import MovieList from "./Movielist";


const SecondaryContainer  = ()=>{

      // get  movies data from store 
         const movies = useSelector((store)=> store.movies);
              console.log("movies", movies)
     return movies && (
        <div className=" bg-black">
              <div className="-mt-40 pl-12 relative z-20">
             <MovieList title={"Now Playing"}  movies={movies.nowPlayingMovies}/>
             <MovieList title={"Trending"}  movies={movies.nowPlayingMovies}/>
             <MovieList title={"Popular"}  movies={movies.popularMovies}/>
             <MovieList title={"Upcoming Movies"}  movies={movies.nowPlayingMovies}/>
             </div>
            {/*
               Movielist - popular
                  -- moviecards
                Movielist - popular
                 Movielist - popular
        
            */}

        </div>
     )
}

export default SecondaryContainer;