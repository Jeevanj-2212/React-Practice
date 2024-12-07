import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Python from "./pages/Python";
import Java from "./pages/Java";
import Html from "./pages/Html";
import Home from "./pages/Home";






function App() {
  return (
    <BrowserRouter>
      
     
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/java" element={<Java/>}></Route>
          <Route path="/python" element={<Python/>}></Route>
          <Route path="/html" element={<Html/>}></Route>
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
