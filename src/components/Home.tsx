import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import {setMovies} from "../store/slices/slice";
import {moviesArray} from "./mock";
import cssStyles from "../styles/styles";

const {home} = cssStyles

const Home = () => {
    const dispatch = useDispatch();
    useEffect(():void => {
        dispatch(setMovies(moviesArray))
    }, []);

    return (
        <home.Container>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
        </home.Container>
    )
};
export default Home;

