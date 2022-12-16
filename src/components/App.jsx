import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dvd from "./Dvd.jsx";
import Search from "./Search";
import AddDvd from "./AddDvd";
import DvdDetails from "./DvdDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />}/>
        <Route path="/:dvdId" element={<DvdDetails />} />
        <Route path="/add" element={<AddDvd />} />
      </Routes>
      <Search />
    </>
  );
}

export default App;
