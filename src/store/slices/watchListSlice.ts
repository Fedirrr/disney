import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../components/mock";
import { IState } from "../types/redux";

const getLocalStorageData = () => {
    try {
        const localStorageData = localStorage.getItem("watchlist");
        return localStorageData ? JSON.parse(localStorageData) : [];
    } catch (error) {
        console.error("Error while retrieving data from localStorage:", error);
        return [];
    }
};


interface IWatchListInitialState {
    watchlistItems: IMovie[];
}

const initialState: IWatchListInitialState = {
    watchlistItems: getLocalStorageData(),
};

export const watchlistSlice = createSlice({
    name: "watchList",
    initialState,
    reducers: {
        addToWatchlist: (state, action) => {
            state.watchlistItems.push(action.payload);
            localStorage.setItem("watchlist", JSON.stringify(state.watchlistItems));
        },
        deleteFromWatchlist: (state, action) => {
            state.watchlistItems = state.watchlistItems.filter(item => item.id !== action.payload);
            localStorage.setItem("watchlist", JSON.stringify(state.watchlistItems));
        },
    },
});

export const { addToWatchlist, deleteFromWatchlist } = watchlistSlice.actions;
export const selectListItem = (state: IState) => state.watchList.watchlistItems;
