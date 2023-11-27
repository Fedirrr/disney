import {createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../components/mock";
import {IState} from "../types/redux";


interface IMovieInitialState {
    movies: IMovie[] | null
}
const initialState:IMovieInitialState = {
    movies: null,
};


export const movieSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        }
    }
})

export const { reducer} = movieSlice;
export const {setMovies} = movieSlice.actions;
export const selectMovie = (state:IState) => state.movie.movies;

