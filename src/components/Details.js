import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import moviesArray from "./mock";
import cssStyles from "../styles/styles";

const {details} = cssStyles;
const Details = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        if (id) {
            const foundMovie = moviesArray.find(movie => movie.id === id);
            if (foundMovie) {
                setMovie(foundMovie);
            } else {
                alert("Movie not found")
            }
        } else {
            alert("The `id` parameter is missing from the URL")
        }
    }, [id, moviesArray]);
    return (
        <details.Container>
            {
                movie && (
                    <>
                        <details.Background>
                            <img src={movie.cardImg} alt=""/>
                        </details.Background>
                        <details.ImageTitle>
                            <img src={movie.titleImg}/>
                        </details.ImageTitle>
                        <details.Controls>
                            <details.PlayButton>
                                <img src="/images/play-icon-black.png"/>
                                <span>PLAY</span>
                            </details.PlayButton>
                            <details.TrailerButton>
                                <img src="/images/play-icon-white.png"/>
                                <span>Trailer</span>
                            </details.TrailerButton>
                            <details.AddButton>
                                <span>+</span>
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
                    </>
                )}
        </details.Container>
    )
}

export default Details



