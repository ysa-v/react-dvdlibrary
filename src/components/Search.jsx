import { useState } from "react";
import SearchBar from "./SearchBar";
import Dvd from "./Dvd";
import SearchCategory from "./SearchCategory";
import useFetch from "../hooks/useFetch";

function Search() {
  const [usersSearch, setUsersSearch] = useState("");
  const [userHasSearched, setUserHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [userSearchCategory, setUserSearchCategory] = useState([]);
  let url = `http://dvd-library.us-east-1.elasticbeanstalk.com/dvds`;
  const [dvdData, error] = useFetch(url);

  function getSearchCategory(searchCategory) {
    setUserSearchCategory(searchCategory);
  }

  function filterDvdData(searchTerm) {
    setUserHasSearched(true);
    setUsersSearch(searchTerm);
    

    let filteredResults;

    if (searchTerm == "" || userSearchCategory == "") {
      filteredResults = [];
      setUserHasSearched(false);
    } else {
      filteredResults = dvdData.filter((dvd) => {
        if (userSearchCategory == "title"){
          return dvd.title.includes(searchTerm);
        }
        if (userSearchCategory == "director"){
          return dvd.director.includes(searchTerm);
        }
        if (userSearchCategory == "release year"){
          return dvd.releaseDate.includes(searchTerm);
        }
        else {
          return dvd.rating.includes(searchTerm);
        }
      });
    }

    setSearchResults(filteredResults);
  }

  return (
    <div>
      <SearchCategory
        searchCategory={getSearchCategory}
        />
      <SearchBar
        searchValue={usersSearch}
        searchValueFunction={filterDvdData}
      />
      <section className="flex justify-center my-4">
        {userHasSearched ? (
          <>
            <div
              className={
                searchResults.length > 0
                  ? "hidden"
                  : "bg-red-100 border border-red-400 text-red-700  md:w-2/5 lg:max-w-md px-4 py-3 rounded-md"
              }
              role="alert"
            >
              <p className="text-center">
                <strong>Sorry!</strong> There are no Dvds found with {" "}
                <strong>{usersSearch}</strong>
              </p>
            </div>
            <div
              className={
                searchResults.length > 0
                  ? "grid grid-cols-3 gap-2 place-items-center"
                  : "hidden"
              }
            >
              {searchResults.map((dvd) => {
                return (
                  <Dvd
                    key={dvd.dvdId}
                    title={dvd.title}
                    releaseDate={dvd.releaseDate}
                    rating={dvd.rating}
                    notes={dvd.notes}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-3 gap-2 place-items-center">
            {dvdData.map((dvd) => {
              return (
                <Dvd
                key={dvd.dvdId}
                title={dvd.title}
                releaseDate={dvd.releaseDate}
                rating={dvd.rating}
                notes={dvd.notes}
                />
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default Search;
