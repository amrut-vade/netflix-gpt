
import Header from "./Header";
import useNowPlayingHook from "../hook/useNowPlayinghook";
import Maicontainer from "./MainConatainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = ()=>{
  
    // this custom hoook  use for fetching data from movie api 
      useNowPlayingHook()
  
      return(
        <div>
           <Header/>
              {/* 1> maicontainer
              ---  video background 
              --   video title 
              2>  secondaryContainer 
                --- Movilist 
                --  cards */}
             <Maicontainer/>
             <SecondaryContainer/>
                
        </div>
      )
}

export default  Browse;