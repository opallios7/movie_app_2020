import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    // react-router-dom이 v6로 업그레이드 되면서 Route를 Routes로 감싸줘야 함.
    // Component path params 또한 component -> element로 사용하며 Value도 component 태그를 사용해야 함.

    <HashRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
