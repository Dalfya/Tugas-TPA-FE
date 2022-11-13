import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./routs/Header";
import About from "./routs/About";
import Portfolio from "./routs/Portfolio";
import Blog from "./routs/Blog";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="header" element={<Header Propsname={"Diego Alfiandro"}/>} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About name={"Diego Alfiandro"}/>} />
        <Route path="portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  </Router>
)
