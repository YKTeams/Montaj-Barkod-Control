import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Control from "./components/Control";
import Header from "./components/Header";
import Report from "./components/Report";
//import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/report" element={<Report />}></Route>
          {/* <Route path="/control" element={<Control />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
