import React, {useEffect} from "react";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import {useDispatch} from "react-redux";
import {setMovies} from "../store/slices/slice";
import mock from "./mock";
import cssStyles from "../styles/styles";

const {home} = cssStyles

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMovies(mock))
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

