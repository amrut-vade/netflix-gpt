
import {configureStore} from "@reduxjs/toolkit"

import  userReducer from "./userSlice"

const appStore =  configureStore({
    
      reducer:{
          // it has different slices reducesrs
          user: userReducer
      }

    
})

export  default appStore;