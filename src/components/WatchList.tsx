import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectListItem, deleteFromWatchlist } from "../store/slices/watchListSlice";
import cssStyles from "../styles/styles";
import { Link } from "react-router-dom";

const { movie } = cssStyles;

function WatchList() {
    const watchItems = useSelector(selectListItem);
    const dispatch = useDispatch();

    const handleRemoveFromWatchlist = (id:string) => {
        dispatch(deleteFromWatchlist(id));
    };

    console.log(watchItems)
    return (
        <movie.Container>
            {!!watchItems.length ? (
                <movie.Content>
                    {watchItems.map(({ id, backgroundImg, cardImg, title }) => (
                        <movie.Wrap key={id}>
                            <Link to={`/details/${id}`}>
                                <img src={backgroundImg} alt={cardImg} />
                                <p>{title}</p>
                            </Link>
                            <button onClick={() => handleRemoveFromWatchlist(id)}>
                                Remove from Watchlist
                            </button>
                        </movie.Wrap>
                    ))}
                </movie.Content>
            ) : (
                <div>Add some movies to your watchlist</div>
            )}
        </movie.Container>
    );
}

export default WatchList;