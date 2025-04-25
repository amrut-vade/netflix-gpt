import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = ()=>{
       // fetch trailer video $$ updating the store with trailer video data
             const dispacth = useDispatch()         

               const getMOvieVideos =  async () =>{
                     
                   const data = await fetch('https://api.themoviedb.org/3/movie/976573/videos?language=en-US',API_OPTIONS)
     
                     const json =  await data.json();
                     console.log("data",json);
     
                        const filterdata = json.results.filter(video=>video.type ==="Trailer");
                       
                          const trailer =filterdata.length?  filterdata[0] : json.results[0];
                         console.log(trailer);  
                         
                         // whhen you get trailer  lets add into store
                         // add trailer video dispacth action
                         dispacth(addTrailerVideo(trailer))
                         
                         //setTrailer(trailer.key);    
               };
     
               useEffect(()=>{
                      getMOvieVideos();
               },[])
}

export default useMovieTrailer;