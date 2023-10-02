import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    movies: [],
}

export const movieSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        }
    }
})



export const {actions, reducer} = movieSlice
export const {setMovies} = movieSlice.actions
export const selectMovie = (state) => state.movie.movies

