import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {selectMovie, setMovies} from '../store/slices/slice';
import {useDispatch, useSelector} from 'react-redux';
import cssStyles from '../styles/styles';
import {IMovie, moviesArray} from "./mock";

const { movie } = cssStyles;

function Movie() {
    // const allMovies = useSelector(selectMovie);
    const location = useLocation();
    const [searchResults, setSearchResults] = useState<IMovie[]>([]);
    const [noResults, setNoResults] = useState(false);



    const dispatch = useDispatch();
    useEffect(():void => {
        dispatch(setMovies(moviesArray))
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchTerm = searchParams.get('search');
        console.log(searchTerm);

        if (searchTerm) {
            const results = moviesArray.filter((movie) => {
                return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
            });
            console.log(results);

            setSearchResults(results);
            setNoResults(results.length === 0);
        } else {
            setSearchResults(moviesArray);
            setNoResults(false);
        }
    }, [location.search]);



    return (
        <movie.Content>
            {moviesArray.length === 0 ? (
                moviesArray.map(({ id, backgroundImg, cardImg }) => (
                    <movie.Wrap key={id}>
                        <Link to={`/details/${id}`}>
                            <img src={backgroundImg} alt={cardImg} />
                        </Link>
                    </movie.Wrap>
                ))
            ) : (
                noResults ? (
                    <p>No movies found for the entered search term.</p>
                ) : (
                    searchResults.map(({ id, backgroundImg, cardImg }) => (
                        <movie.Wrap key={id}>
                            <Link to={`/details/${id}`}>
                                <img src={backgroundImg} alt={cardImg} />
                            </Link>
                        </movie.Wrap>
                    ))
                )
            )}
        </movie.Content>
    );
}

export default Movie;
