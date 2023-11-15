import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import Details from "./Details";
import WatchList from "./WatchList";
import Movie from "./Movie";

function App () {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/watchlist" element={<WatchList />} />
                <Route path="/movie" element={<Movie />} />
                {/*<Route path="/movie/search" element={<Movie />} />*/}
            </Routes>
        </Router>
    </div>
  );
}

export default App;


