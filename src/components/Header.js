
// import {SignOut} from "firebase/auth";
// import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import {logo, SUPPORTED_LANGUAGE} from "../utils/constant"
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/ConfigSlice";
const  Header = ()=>{
         
       const dispatch = useDispatch();
      const navigate = useNavigate();
        const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
     const handleSingout = ()=>{
         // SignOut(auth).then(()=>{
         //  // succeful sigout navigate
       //  navigate("/");
         // }).catch((error)=>{
         //   // An error happend
       //  navigate("/error");
         // })
         navigate("/");
             
     }

     const handleGptSearch  = ()=>{
       // toggle my Gpt Search
       dispatch(toggleGptSearchView())

     }

     // handle onchange value
      const handleLanguage = (e)=>{
        dispatch(changeLanguage(e.target.value))
        
      }

    return (
         <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
           
           <img className="w-44"
           src={logo}
            alt="body"></img>
            
            <div className="p-2 text-white">
                {showGptSearch && <select className="p-2 bg-gray-900 text-white m-2" onChange={handleLanguage}>
                    {/* <option value="en">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="spanis">Spanish</option> */}
                    {
                       SUPPORTED_LANGUAGE.map((lang)=>(
                        <option key={lang.identifier} value={lang.identifier}>
                            {lang.name}
                        </option>
                    

                       ))}
                 </select>}
                <button className="p-2 mx-2 text-white bg-purple-800 rounded-lg"
                 onClick={handleGptSearch}
                >{showGptSearch? "Homepage":"GPT Search" }</button>
               <button onClick={handleSingout} className="font-bold">Sign Out</button>
            </div>
         </div>
    )

}

export default Header