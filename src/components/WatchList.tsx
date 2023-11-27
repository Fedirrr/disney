import React from 'react';
import { useSelector} from "react-redux";
import { selectListItem,} from "../store/slices/watchListSlice";
import cssStyles from "../styles/styles";
import {Link} from "react-router-dom";

const {movie} = cssStyles;

function WatchList() {
    const watchItems = useSelector(selectListItem)

    return (
        <movie.Container>
            {!!watchItems?.length ?
                (<movie.Content>
                    {
                        !!watchItems?.length && watchItems.map(({id, backgroundImg, cardImg}) => (
                            <movie.Wrap key={id}>
                                <Link to={`/details/${id}`}>
                                    <img
                                        src={backgroundImg}
                                        alt={cardImg}/>
                                </Link>
                            </movie.Wrap>
                        ))
                    }
                </movie.Content>) : <div>Add some movies to your watchlist</div>
            }
        </movie.Container>
    );
}

export default WatchList;