
import {configureStore} from "@reduxjs/toolkit"

import  userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import { useDispatch } from "react-redux";
import gptReducer from "./gptSlice"
import configReducer from "./ConfigSlice"
const appStore =  configureStore({

      
    
      reducer:{
          // it has different slices reducesrs
          user: userReducer,
          movies:moviesReducer,
          gpt:gptReducer,
          config:configReducer,
      },

    
})

export  default appStore;