import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {selectSliderDetails,} from "../store/slices/sliderDetailsSlice";
import cssStyles from "../styles/styles";
import {addToWatchlist, deleteFromWatchlist} from "../store/slices/watchListSlice";
import {ISliderDetails, sliderArray} from "./mock";
import SliderModal from "./SliderModal";

const SliderDetails = () => {
    const {details} = cssStyles;
    const {id} = useParams();
    const dispatch = useDispatch()
    const sliderDetails = useSelector(selectSliderDetails);

    const [isFavoriteAdded, setIsFavoriteAdded] = useState(false);
    const [movie, setMovie] = useState<ISliderDetails | null>(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (id) {
            const foundMovie = sliderArray.find((movie) => movie.id === id);
            if (foundMovie) {
                setMovie(foundMovie);
            }
        }
    }, [id]);

    useEffect(() => {
        const foundListItem = sliderDetails?.find((item) => item.id === id);
        setIsFavoriteAdded(!!foundListItem);
    }, [id, sliderDetails]);

    function handleClick(): void {
        if (movie && !isFavoriteAdded) {
            dispatch(addToWatchlist(movie));

        } else if (isFavoriteAdded) {
            dispatch(deleteFromWatchlist(id));
        }
    }

    return (
        <div>
            {movie ? (

                <details.Container>
                    {modal && <SliderModal closeModal={setModal} sliderList={movie}/>}

                    <details.Background>
                        <img src={movie?.backgroundImg} alt={movie?.title}/>
                    </details.Background>
                    <details.ImageTitle>
                        <img src={movie?.titleImg} alt="titledImg"/>
                    </details.ImageTitle>
                    <details.Controls>
                        <details.PlayButton>
                            <img src="/images/play-icon-black.png"/>
                            <span>PLAY</span>
                        </details.PlayButton>
                        <details.TrailerButton
                            onClick={() => setModal(!modal)}>
                            <img src="/images/play-icon-white.png"/>
                            <span>Trailer</span>
                        </details.TrailerButton>
                        <details.AddButton>
                            <span onClick={handleClick}>
                             {isFavoriteAdded ? "★" : "☆"}
                            </span>
                        </details.AddButton>
                        <details.GroupWatchButton>
                            <img src="/images/group-icon.png"/>
                        </details.GroupWatchButton>
                    </details.Controls>
                    <details.SubTitle>
                        {movie.subTitle}
                    </details.SubTitle>
                    <details.Description>
                        {movie.description}
                    </details.Description>
                </details.Container>

            ) : (
                <p style={{
                    padding: "70px"
                }}>No movies found for the entered id</p>
            )}
        </div>
    );
}

export default SliderDetails