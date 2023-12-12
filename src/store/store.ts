import { configureStore } from "@reduxjs/toolkit";
import { sliderListSlice } from "./slices/sliderDetailsSlice";
import {companySlice} from "./slices/aboutCompanySlice";
import {watchlistSlice} from "./slices/watchListSlice";
import {movieSlice} from "./slices/movieSlice";

export const store = configureStore({
    reducer: {
        movie: movieSlice.reducer,
        watchList: watchlistSlice.reducer,
        sliderDetails:sliderListSlice.reducer,
        aboutCompany:companySlice.reducer
    }
});
