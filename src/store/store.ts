import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as movieReducer} from "./slices/slice";
import {watchlistSlice} from "./slices/watchList";




export const store = configureStore({
    reducer: {
        movie: movieReducer,
        watchList: watchlistSlice.reducer
    }
})
