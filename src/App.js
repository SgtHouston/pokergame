// import './App.css';
import React from 'react'
// npm install react-router-dom@6
import Home from "./Pages/Home";
import Table from './Pages/Table'
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>

          {/* Page 1  */}
          < Route exact path="/" element={<Home/>} />

          {/* Page 2  */}
          < Route exact path="/table" element={<Table/>} />

          {/* Redirect */}
          <Route exact path="*"  element={<NavLink to="/" />} />
          {/* Redirect to homepage */}
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
