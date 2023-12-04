import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import HomeMovies from "./HomeMovies";
import {setMovies} from "../store/slices/movieSlice";
import cssStyles from "../styles/styles";
import {fetchMovies, fetchSliderDetailsById} from "../api/movies";
import {useParams} from "react-router-dom";
import {setSliderDetails} from "../store/slices/sliderDetailsSlice";
import {setSCompanyDetails} from "../store/slices/aboutCompanySlice";
import {viewersArray} from "./mock";

const {home} = cssStyles

const Home = () => {
    const dispatch = useDispatch();

    const {id} = useParams();
    useEffect(() => {
        if (id) {
            fetchSliderDetailsById(id).then(res => {
                dispatch(setSliderDetails(res));
            });
            dispatch(setSCompanyDetails(viewersArray))
        }
    }, [dispatch]);

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

