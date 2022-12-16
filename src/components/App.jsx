import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./Contact.jsx";
import Search from "./Search";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />}/>
        {/* <Route path="/:dvdID" element={<DvdDetails />} /> */}
        {/* <Route path="/add" element={<AddDvd />} /> */}
      </Routes>
      <Search />
    </>
  );
}

export default App;
