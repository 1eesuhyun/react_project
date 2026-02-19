import React, {Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import Footer from "./components/layout/Footer";
import JejuAttractionList from "./components/jeju/JejuAttractionList";
import JejuAttractionDetail from "./components/jeju/JejuAttractionDetail";
import YoutubeFind from "./Youtube/YoutubeFind";
import BoardList from "./components/board/BoardList";
import BoardDetail from "./components/board/BoardDetail";
import BoardUpdate from "./components/board/BoardUpdate";
import BoardInsert from "./components/board/BoardInsert";
import ChatBot from "./chatbot/ChatBot";


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/jeju/attraction" element={<JejuAttractionList/>}/>
                <Route path="/jeju/attraction_detail/:contentid" element={<JejuAttractionDetail/>}/>
                <Route path="/youtube" element={<YoutubeFind/>}/>
                <Route path="/board/list" element={<BoardList/>}/>
                <Route path="/board/insert" element={<BoardInsert/>}/>
                <Route path="/board/detail/:no" element={<BoardDetail/>}/>
                <Route path="/board/update/:no" element={<BoardUpdate/>}/>
                <Route path="/chatbot" element={<ChatBot/>}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
