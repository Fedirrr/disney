import React from "react";
import cssStyles from "../styles/styles";
const {header} = cssStyles

const Header = () => {

    return (
        <header.NavBar>
            <header.NavImg>
                <a href="/">
                    <img src="/images/logo.svg" alt="Disney+"/>
                </a>
            </header.NavImg>
            <header.NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="home"/>
                    <span>HOME</span>
                </a>
                <a href="/search">
                    <img src="/images/search-icon.svg" alt="search"/>
                    <span>Search</span>
                </a>
                <a href="/watchlist">
                    <img src="/images/watchlist-icon.svg" alt="watchlist"/>
                    <span>WATCHLIST</span>
                </a>
                <a href="/originals">
                    <img src="/images/original-icon.svg" alt="originals"/>
                    <span>ORIGINALS</span>
                </a>
                <a href="/movies">
                    <img src="/images/movie-icon.svg" alt="movies"/>
                    <span>MOVIES</span>
                </a>
                <a href="/series">
                    <img src="/images/series-icon.svg" alt="series"/>
                    <span>SERIES</span>
                </a>
            </header.NavMenu>
        </header.NavBar>
    )
}

export default Header
