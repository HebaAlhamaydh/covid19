import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import recordsSlice from './records'

// import usersSlice from './users'

const store = configureStore({
    reducer:{
        authSlice:auth,
        recordsSlice,
       
    }
})

export default store