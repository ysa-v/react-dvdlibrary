import { useState } from "react";

const SearchCategory = () => {
    const [open, setOpen] = useState(false);
    const [searchCategory, setSearchCategory] = useState("");
    const handleOpen = () => {
        setOpen(!open);
    };

    const handleTitleOption = () => {
        setSearchCategory("title");
        setOpen(false);
    };

    const handleDirectorOption = () => {
        setSearchCategory("director");
        setOpen(false);
    };

    const handleRatingOption = () => {
        setSearchCategory("rating");
        setOpen(false);
    };

    const handleReleaseYear = () => {
        setSearchCategory("release year");
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