
import {configureStore} from "@reduxjs/toolkit"

import  userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import { useDispatch } from "react-redux";

const appStore =  configureStore({

      
    
      reducer:{
          // it has different slices reducesrs
          user: userReducer,
          movies:moviesReducer,
      },

    
})

export  default appStore;