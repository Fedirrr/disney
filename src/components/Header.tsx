import React, {useState, ChangeEvent} from "react";
import cssStyles from "../styles/styles";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const {header} = cssStyles
const Header = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    const handleSearch = () => {
        navigate(`/movie?search=${searchTerm}`);
        setSearchTerm("")
    };

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
                    <img src="/images/movie-icon.svg" alt="movies"/>
                    <span>MOVIE</span>
                </Link>
            </header.NavMenu>
            <form style={{width: "100%",
                display: "contents"}}>

                <header.Search type="search" placeholder="Search"
                               value={searchTerm}
                               autoComplete="off"
                               onChange={handleInputChange}
                />
                <button type="button" onClick={handleSearch}>
                    find
                </button>

            </form>

        </header.NavBar>
    )
}

export default Header
