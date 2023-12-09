import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setSliderDetails} from '../store/slices/sliderDetailsSlice';
import {ISliderDetails, sliderArray} from './mock';
import cssStyles from '../styles/styles';
import {fetchSliderDetailsById} from '../api/movies';
import SliderModal from './SliderModal';
import {FaVolumeUp, FaVolumeMute} from "react-icons/fa";

const SliderDetails = () => {
    const {sliderDetailsStyles} = cssStyles;
    const {id} = useParams();
    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState(false);
    const [movie, setMovie] = useState<ISliderDetails | null>(null);

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
                                    <dl>
                                        <dt>Release date:</dt>
                                        <dd>{movie.infoAboutMovie}</dd>
                                    </dl>
                                    <dl>
                                        <dt>Duration:</dt>
                                        <dd>{movie.duration}</dd>
                                    </dl>
                                    <dl>
                                        <dt style={{width: "120px", marginRight: "40px"}}>Stars:</dt>
                                        <dd>{movie.starring}</dd>
                                    </dl>
                                    <dl>
                                        <dt>Director:</dt>
                                        <dd>{movie.director}</dd>
                                    </dl>
                                    <dl>
                                        <dt>Genre:</dt>
                                        <dd>{movie.genre}</dd>
                                    </dl>
                                    <dl>
                                        <dt>Trailer</dt>
                                        <dd>
                                            <img src="/images/play-icon-white.png"
                                                 onClick={() => setIsModal(!isModal)}/>
                                        </dd>
                                    </dl>

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
                <p style={{
                    padding: "70px"
                }}>No movies found for the entered id</p>
            )}


        </>
    );
};

export default SliderDetails;
