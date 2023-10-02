import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import Details from "./Details";
import mock from "./mock";
const App = () => {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home  moviesArray={mock}/>} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
