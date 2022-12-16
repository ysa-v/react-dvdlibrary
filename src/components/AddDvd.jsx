import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddDvd() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [director, setDirector] = useState("");
    const [rating, setRating] = useState("");
    const [notes, setNotes] = useState("");

    async function addDvd(event) {
        event.preventDefault();
        await fetch(//"add API endpoint url here"
        , {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              releaseDate: releaseDate,
              director: director,
              rating: rating,
              notes: notes,
            }),
        });
    }

    navigate("/");
  }
  
  export default AddDvd;