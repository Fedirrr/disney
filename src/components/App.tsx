import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./MainPage";
import Header from "./Header";
import Home from "./Home";
import Details from "./Details";
import WatchList from "./WatchList";
import Movie from "./Movie";
import SliderDetails from "./SliderDetails";
import AboutCompany from "./AboutCompany";

function App () {



    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about/:id" element={<AboutCompany />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/sliderDetails/:id" element={<SliderDetails />} />
                    <Route path="/watchlist" element={<WatchList />} />
                    <Route path="/movie" element={<Movie />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;

