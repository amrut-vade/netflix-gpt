import { useSelector } from "react-redux";
import lang from "../utils/lanuageConstant"

const GptSearchBar = ( )=>{

    const langKey = useSelector((store)=>store.config.lang)
    console.log("lang",langKey);

    return(
        <div className="p-[10%] flex justify-center">
            <form className="w-8/12 bg-black grid grid-cols-12">
                <input type="text" 
                className="p-4 m-4 col-span-9" 
                placeholder={lang[langKey].gptSearchPalce}>

                </input>
               <button 
               className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
               >
                {lang[langKey].search}
               </button>

            </form>
        </div>
    )
}

export default GptSearchBar;