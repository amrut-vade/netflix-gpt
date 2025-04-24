
// import {SignOut} from "firebase/auth";
// import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import {logo} from "../utils/constant"
const  Header = ()=>{
         
      const navigate = useNavigate();
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

    return (
         <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
           
           <img className="w-44"
           src={logo}
            alt="body"></img>
            
            <div className="p-2 text-white">
               <button onClick={handleSingout} className="font-bold">Sign Out</button>
            </div>
         </div>
    )

}

export default Header