import React from 'react';
import { useSelector} from "react-redux";
import { selectListItem,} from "../store/slices/watchList";
import cssStyles from "../styles/styles";

const {movie} = cssStyles;

function Movie() {

    return (
        <movie.Container>
            hello
        </movie.Container>
    );
}

export default Movie;