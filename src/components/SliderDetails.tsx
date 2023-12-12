import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSliderDetails} from "../store/slices/sliderDetailsSlice";
import {ISliderDetails, sliderArray} from "./mock";
import cssStyles from "../styles/styles";
import {fetchSliderDetailsById} from "../api/movies";
import SliderModal from "./SliderModal";

const SliderDetails = () => {
    const {sliderDetailsStyles} = cssStyles;
    const {id} = useParams();
    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState(false);
    const [movie, setMovie] = useState<ISliderDetails | null>(null);

    const movieDetails = [
        { title: "Release date", content: movie?.infoAboutMovie },
        { title: "Duration", content: movie?.duration },
        { title: "Stars", content: movie?.starring },
        { title: "Director", content: movie?.director },
        { title: "Genre", content: movie?.genre },
        { title: "Trailer", content: <img src="/images/play-icon-white.png" onClick={() => setIsModal(!isModal)} /> }
    ];

    useEffect(() => {
        if (id) {
            fetchSliderDetailsById(id).then((res) => {
                if (res) {
                    dispatch(setSliderDetails(res));
                    setMovie(res);
                }
            });
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (id) {
            const foundMovie = sliderArray.find((item) => item.id === id);
            if (foundMovie) {
                setMovie(foundMovie);
            }
        }
    }, [id]);
    return (
        <>
            {id && movie ? (
                <sliderDetailsStyles.Container>
                    {isModal && <SliderModal closeModal={() => setIsModal(false)} sliderList={movie}/>}

                    <sliderDetailsStyles.MovieDescriptionContainer>
                        <sliderDetailsStyles.MovieDescriptionContent>
                            <div>
                                <sliderDetailsStyles.MovieDescriptionPoster src={movie.titleImg} alt={movie.title}/>
                            </div>
                            <sliderDetailsStyles.MovieWrapDescriptionInfo>
                                <sliderDetailsStyles.MovieTitleDescription>
                                    Description
                                </sliderDetailsStyles.MovieTitleDescription>
                                <sliderDetailsStyles.MovieDescriptionInfo>
                                    {movieDetails.map(({ title,content}) => (
                                        <dl key={title}>
                                            <dt>{title}</dt>
                                            <dd>{content}</dd>
                                        </dl>
                                    ))}
                                </sliderDetailsStyles.MovieDescriptionInfo>
                            </sliderDetailsStyles.MovieWrapDescriptionInfo>
                        </sliderDetailsStyles.MovieDescriptionContent>
                        <div>
                            <h2>
                                {movie.descriptionTitle}
                            </h2>
                            <span>
                                {movie.description}
                            </span>
                        </div>
                    </sliderDetailsStyles.MovieDescriptionContainer>
                </sliderDetailsStyles.Container>
            ) : (
                <sliderDetailsStyles.NotFoundMovie>No movies found for the entered id</sliderDetailsStyles.NotFoundMovie>
            )}


        </>
    );
};

export default SliderDetails;
