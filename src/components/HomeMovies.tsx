import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {selectMovie} from "../store/slices/slice";
import cssStyles from "../styles/styles";
const {movie} = cssStyles;

const HomeMovies = () => {
    const movies = useSelector(selectMovie)
    return (
        <div>
            <h4>Recommended for You</h4>
            <movie.Content>
                {
                    !!movies?.length && movies.map(({id, backgroundImg, cardImg}) => (
                        <movie.Wrap key={id}>
                            <Link to={`/details/${id}`}>
                                <img
                                    src={backgroundImg}
                                    alt={cardImg}/>
                            </Link>
                        </movie.Wrap>
                    ))
                }
            </movie.Content>
        </div>
    )
}

export default HomeMovies



