import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../components/mock";

// interface IWatchListInitialState {
//     watchlistItems: IMovie[] ;
// }
//
// interface IWatchListState {
//     watchList: IWatchListInitialState;
// }
//
// const initialState: IWatchListInitialState = {
//     watchlistItems: [],
// };
//
// export const watchlistSlice = createSlice({
//     name: "watchList",
//     initialState,
//     reducers: {
//         addToWatchlist: (state, action) => {
//             if (state.watchlistItems) {
//                 state.watchlistItems.push(action.payload);
//             }
//         }
//         ,
//         deleteFromWatchlist: (state, action) => {
//             if (state.watchlistItems) {
//                 state.watchlistItems = state.watchlistItems.filter(item => item.id !== action.payload);
//             }
//         },
//     },
// });

interface IWatchListInitialState {
    watchlistItems: IMovie[] | null;
}

interface IWatchListState {
    watchList: IWatchListInitialState;
}

const initialState: IWatchListInitialState = {
    watchlistItems: null,
};

export const watchlistSlice = createSlice({
    name: "watchList",
    initialState,
    reducers: {
        addToWatchlist: (state, action) => {
            if (state.watchlistItems) {
                state.watchlistItems.push(action.payload);
            }
        }
        ,
        deleteFromWatchlist: (state, action) => {
            if (state.watchlistItems) {
                state.watchlistItems = state.watchlistItems.filter(item => item.id !== action.payload);
            }
        },
    },
});

export const { addToWatchlist, deleteFromWatchlist } = watchlistSlice.actions;
export const selectListItem = (state: IWatchListState) => state.watchList.watchlistItems;
