import { useState } from "react";

function SearchCategory (getSearchCategory) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    const handleTitleOption = () => {
        getSearchCategory("title");
        setOpen(false);
    };

    const handleDirectorOption = () => {
        getSearchCategory("director");
        setOpen(false);
    };

    const handleRatingOption = () => {
        getSearchCategory("rating");
        setOpen(false);
    };

    const handleReleaseYear = () => {
        getSearchCategory("release year");
        setOpen(false);

    };

    return (
        <div className="dropdown">
            <button onClick={handleOpen}>Dropdown</button>
            {open ? (
                <ul className="category">
                    <li className="category-item">
                        <button onClick={handleTitleOption}>Title</button>
                    </li>
                    <li className="category-item">
                        <button onClick={handleDirectorOption}>Director</button>
                    </li>
                    <li className="category-item">
                        <button onClick={handleRatingOption}>Rating</button>
                    </li>
                    <li className="category-item">
                        <button onClick={handleReleaseYear}>Release Year</button>
                    </li>
                </ul>
            ): null}
        </div>
    );
    
};

export default SearchCategory;