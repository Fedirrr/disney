import { configureStore } from "@reduxjs/toolkit";
import { reducer as movieReducer } from "./slices/slice";
import { watchlistSlice } from "./slices/watchListSlice";
import { sliderListSlice } from "./slices/sliderDetailsSlice";




export const store = configureStore({
    reducer: {
        movie: movieReducer,
        watchList: watchlistSlice.reducer,
        sliderDetails:sliderListSlice.reducer
    }
})
