import {configureStore} from '@reduxjs/toolkit'
import creatorsReducer from '../features/creators/creatorsSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    creators: creatorsReducer,
    user: userReducer
  }
})