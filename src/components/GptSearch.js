import { useSelector } from "react-redux";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";


const GptSearch = ()=>{

        

     return(
        <div>
            <div className="absolute -z-10">
           <img  className="bg-opacity-0"
             src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_medium.jpg"
              alt="body"></img>
          
           </div>
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
     )
}

export default GptSearch;