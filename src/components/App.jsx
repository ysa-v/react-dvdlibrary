import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dvd from "./Dvd.jsx";
import Search from "./Search";
import AddDvd from "./AddDvd";
import DvdDetails from "./DvdDetails";
import DeleteDvd from "./DeleteDvd";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />}/>
        <Route path="/:dvdID" element={<DvdDetails />} />
        <Route path="/add" element={<AddDvd />} />
        <Route path="/delete" element={<DeleteDvd />} />
      </Routes>
      <Search />
    </>
  );
}

export default App;
