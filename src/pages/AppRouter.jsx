import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  // console.log(search);
  return (
    <BrowserRouter>
      {isLoggedIn || (
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
      {isLoggedIn && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} search={search} setSearch={setSearch}/>}
      {isLoggedIn && (
        <Routes>
          <Route path="/" element={<Home search={search}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default AppRouter;
