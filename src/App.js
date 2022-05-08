import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Menu from "./components/Menu/Menu";
import Home from "./pages/home/Home";
import Terminology from "./pages/terminology/Terminology";
import VisualDic from "./pages/visualdic/VisualDic";
import Publications from "./pages/publications/Publications";

function App() {
  return (
    <div className="App">
    <Router>
      <Menu />
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route exact path="/terminology" element={<Terminology/>} />
        <Route exact path="/visualdic" element={<VisualDic/>} />
        <Route exact path="/publications" element={<Publications/>} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;