import {createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../components/mock";

const savedData = localStorage.getItem("watchListItems");
const list = savedData !== null ? JSON.parse(savedData) : [];
interface IWatchListInitialState {
    watchlistItems : IMovie[],
}

interface IWatchListState {
    watchList: {
        watchlistItems: IMovie[]
    }
}

const initialState:IWatchListInitialState = {
    watchlistItems : list,
};

export const watchlistSlice = createSlice({
    name: "watchList",
    initialState,
    reducers: {
        addToWatchlist: (state, action) => {
            state.watchlistItems.push(action.payload);
            localStorage.setItem("watchListItems", JSON.stringify(state.watchlistItems))
        },
        deleteFromWatchlist: (state, action) => {
            state.watchlistItems = state.watchlistItems.filter(item => item.id !== action.payload);
        },
    }
})

export const {addToWatchlist,deleteFromWatchlist} = watchlistSlice.actions
export const selectListItem = (state:IWatchListState) => state.watchList.watchlistItems;
