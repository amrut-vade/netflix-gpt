
import { useSelector } from "react-redux";
import useMovieTrailer from "../hook/useMovieTrailer";



const VideoBackground = ({movieId})=>{
      
    useMovieTrailer(movieId);
       // get data from store we use useSelector
          const gettrailerVideo = useSelector(store=>store.movies?.addTrailerVideo);
                // const id =  gettrailerVideo?.key;
                // console.log(id);
           // fetch trailer video $$ updating the store with trailer video data
           



        // to add data into store
    //     const dispatch =  useDispatch();

    //    // const [trailerId,setTrailer] = useState(null);
    //   // fetch trailer videos

    //      // fetch trailer video $$ updating the store with trailer video data

    //       const getMOvieVideos =  async () =>{
                
    //           const data = await fetch('https://api.themoviedb.org/3/movie/976573/videos?language=en-US',API_OPTIONS)

    //             const json =  await data.json();
    //             console.log("data",json);

    //                const filterdata = json.results.filter(video=>video.type ==="Trailer");
                  
    //                  const trailer =filterdata.length?  filterdata[0] : json.results[0];
    //                 console.log(trailer);  
                    
    //                 // whhen you get trailer  lets add into store
    //                 // add trailer video dispacth action
    //                 dispatch(addTrailerVideo(trailer))
                    
    //                 //setTrailer(trailer.key);    
    //       };

    //       useEffect(()=>{
    //              getMOvieVideos();
    //       },[])

     return(
        <div className="w-screen">
            <iframe  
             className="w-screen aspect-video"
             src={"https://www.youtube.com/embed/"+gettrailerVideo?.key}
              title="YouTube video player" 
             
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerpolicy="strict-origin-when-cross-origin"
               
                >

                </iframe>

        </div>
     )
}

export default VideoBackground;