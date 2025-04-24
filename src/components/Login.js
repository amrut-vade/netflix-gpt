import {useState,useRef} from "react"
import Header from "./Header"
import { checkvalidaData } from "../utils/validate"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";


const Login = ()=>{
                
             const [isSignInForm , setSignForm]= useState(true);
             const [errorMessage,setErroMessage] = useState(null);

             const navigate = useNavigate();
           //  const fullName = useRef(null);
             const email = useRef(null);
             const password= useRef(null)

            const toggleSignInForm = ()=>{
                setSignForm(!isSignInForm);
            }

            const handleButtonClick = ()=>{
                // validate form data
                //const checkvalidaData =
                console.log(email.current.value);
                console.log(password.current.value);
                //console.log(fullName.current.value)
                
                const message = checkvalidaData(email.current.value, password.current.value);
                console.log(message);
                setErroMessage(message)
                navigate("/browse")
                // if(message)return;

                if(!isSignInForm){
                   // Sign UP logic
                   createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                   .then((userCredential) => {
                      // Signed up 
                      const user = userCredential.user;
                      console.log(user)
                       navigate("/browse")
                       // ...
                     })
                     .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      setErroMessage( errorCode + " -" +errorMessage)
                    // ..
                   });
                  }else{
                  // Sign IN logic
                  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                  .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                     console.log(user)
                     navigate("/browse")
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErroMessage( errorCode + " -" +errorMessage)

                  });

                  }

                
                }

    return (
         <div>
            <Header/>
            <div className="absolute">
           <img  className="bg-opacity-0"
             src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_medium.jpg"
              alt="body"></img>
          
           </div>
             <form onSubmit={(e)=>e.preventDefault()}
             className="w-3/12 my-36 mx-auto absolute p-12 bg-black right-0 left-0 text-white bg-opacity-80">
                  <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"} </h1>
                  {!isSignInForm &&(
                    <input 
                  
                    type="text" placeholder="Full Name " className="p-4 my-4 w-full bg-gray-700"/>
                  )

                  }

                <input  
                ref={email}
                type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
                <input
                  ref={password}
                  type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
                  <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
                <button 
                
                 className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"} 
                 </button>
                 <p className="text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign Up Now":"Already registered? Sign In Now"}</p>
             </form>
             
           </div>
    )
}

export default Login;
