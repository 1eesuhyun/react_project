import React, {Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import Footer from "./components/layout/Footer";
import JejuAttractionList from "./components/jeju/JejuAttractionList";
import JejuAttractionDetail from "./components/jeju/JejuAttractionDetail";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/jeju/attraction" element={<JejuAttractionList/>}/>
                {/*<Route path="/jeju/attraction_detail/:contentid" element={<JejuAttractionDetail/>}/>*/}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
