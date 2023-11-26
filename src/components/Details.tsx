import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Alert from "./Alert";
import {moviesArray, IMovie} from "./mock";
import {addToWatchlist, selectListItem, deleteFromWatchlist} from "../store/slices/watchList";
import cssStyles from "../styles/styles";
import Modal from "./Modal";

const Details = () => {

    const {details} = cssStyles;
    const {id} = useParams();
    const dispatch = useDispatch()
    const watchItems = useSelector(selectListItem)

    const [isFavoriteAdded, setIsFavoriteAdded] = useState(false);
    const [movie, setMovie] = useState<IMovie | null>(null);
    const [modal, setModal] = useState(false);


    useEffect(() => {
        if (id) {
            const foundMovie = moviesArray.find((movie) => movie.id === id);
            if (foundMovie) {
                setMovie(foundMovie);
            }
        }
    }, [id]);

    useEffect(() => {
        const foundListItem = watchItems?.find((item) => item.id === id);
        setIsFavoriteAdded(!!foundListItem);
    }, [id, watchItems]);

    function handleClick(): void {
        if (movie && !isFavoriteAdded) {
            console.log(movie)
            dispatch(addToWatchlist(movie));

        } else if (isFavoriteAdded) {
            dispatch(deleteFromWatchlist(id));
        }
    }

    return (
        <>
            {movie ? (
                <details.Container>
                    {modal && <Modal closeModal={setModal} moviesList={movie}/>}

                    <details.Background>
                        <img src={movie.cardImg} alt="cardImg"/>
                    </details.Background>
                    <details.ImageTitle>
                        <img src={movie.titleImg} alt="titledImg"/>
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
            ) : (<Alert/>)}
        </>
    )
}

export default Details



