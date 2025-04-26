
import Header from "./Header";
import useNowPlayingHook from "../hook/useNowPlayinghook";
import Maicontainer from "./MainConatainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hook/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";


const Browse = ()=>{

      // to read gpt value from stores
       const showGptSearch =  useSelector(store=>store.gpt.showGptSearch);

  
    // this custom hoook  use for fetching data from movie api 
      useNowPlayingHook()

      //
      usePopularMovies()
  
      return(
        <div>

           <Header/>   

             {
               showGptSearch ? ( <GptSearch/> ): (<>
                                      <Maicontainer/>             
                                      <SecondaryContainer/>
                                        </>)
               
             }     
               
             


                     {/* 1> maicontainer
              ---  video background 
              --   video title 
              2>  secondaryContainer 
                --- Movilist 
                --  cards */}
        </div>
      )
}

export default  Browse;