import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import HomeMovies from "./HomeMovies";
import {setMovies} from "../store/slices/slice";
import cssStyles from "../styles/styles";
import {fetchMovies} from "../api/movies";

const {home} = cssStyles

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovies().then(res => {
            dispatch(setMovies(res))
        })
    }, [dispatch]);

    return (
        <home.Container>
            <ImgSlider/>
            <Viewers/>
            <HomeMovies/>

        </home.Container>
    )
};
export default Home;

