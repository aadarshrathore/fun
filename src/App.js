import React from "react";
import "./App.css";
import Istriangle from "./Istriangle";
import { Route, Routes, Link } from "react-router-dom";
import Quiz from "./Quiz";
import Hypo from "./Hypo";
import Area from "./Area";

function App() {
  return (
    <div className="App">
      <div className="left-container">
        <span className="header">Fun With Triangles</span>
        <div className="nav">
          <span>Select whatever you want </span>
          <Link to="/">
            <button> Is Tri angle? </button>
          </Link>
          <Link to="/hypo">
            <button> Find hypotenuses </button>
          </Link>
          <Link to="/Quiz">
            <button> Play Quiz </button>
          </Link>
          <Link to="/Area">
            <button> Area of Triangle </button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Istriangle />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/hypo" element={<Hypo />} />
        <Route path="/Area" element={<Area/>} />
      </Routes>
    </div>
  );
}

export default App;
