import React, {useState, ChangeEvent, useEffect} from "react";
import cssStyles from "../styles/styles";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {auth, provider} from "../firebaseComp";
import {signInWithPopup} from "firebase/auth"
import Logout from "./Logout"
import Login from "./Login"

const Header = () => {
    const {header} = cssStyles
    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    const handleSearch = () => {
        navigate(`/movie?search=${searchTerm}`);
        setSearchTerm("")
    };
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
    const handleLogin = () => {
        signInWithPopup(auth, provider).then((data) => {
            setData(data.user.photoURL || "")
            localStorage.setItem("photoURL", data.user.photoURL || "");
        })
    }

    useEffect(() => {
        setData(localStorage.getItem("photoURL") || "" )
    });
    console.log(data)
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
            <header.Form>
                <header.Search type="search" placeholder="Search"
                               value={searchTerm}
                               autoComplete="off"
                               onChange={handleInputChange}
                               onKeyPress={handleKeyPress}
                />
                <header.FormBtn onClick={handleSearch}
                                disabled={!searchTerm}>
                    Find
                </header.FormBtn>
                {
                    data ? <Logout data={data}/> :
                        <Login handleLogin={handleLogin}/>
                }
            </header.Form>
        </header.NavBar>
    )
}
export default Header
