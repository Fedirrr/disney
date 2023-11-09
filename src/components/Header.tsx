import React, {useEffect, useState} from "react";
import cssStyles from "../styles/styles";
import {Link} from "react-router-dom";
import {selectListItem} from "../store/slices/watchList";
import {useSelector} from "react-redux";

const {header} = cssStyles
const Header = () => {
    const searchMovie = useSelector(selectListItem)
    const [searchQuery, setSearchQuery] = useState(''); // Поточний рядок пошуку
    const [searchResults, setSearchResults] = useState([]); // Результати пошуку

    function performSearch(query:string) {
        const results:any = searchMovie.filter(movie => {
            return movie.title.toLowerCase().includes(query.toLowerCase());
        });
        setSearchResults(results);
    }

    useEffect(() => {
        performSearch(searchQuery);
    }, [searchQuery]);

    return (

        <header.NavBar>
            <header.NavImg>
                <Link to="/">
                    <img src="/images/logo.svg" alt="Disney+"/>
                </Link>
            </header.NavImg>
            <header.NavMenu>
                <Link to="/home">
                    <img src="/images/home-icon.svg" alt="home"/>
                    <span>HOME</span>
                </Link>
                <Link to="/watchlist">
                    <img src="/images/watchlist-icon.svg" alt="watchlist"/>
                    <span>WATCHLIST</span>
                </Link>
                <Link to="/movie">
                    <img src="/images/movie-icon.svg" alt="movie"/>
                    <span>MOVIE</span>
                </Link>
            </header.NavMenu>

            <header.Search type="text" placeholder="Search"
                           value={searchQuery}
                           onChange={(e:any) => setSearchQuery(e.target.value)}
            />
        </header.NavBar>
    )
}

export default Header
