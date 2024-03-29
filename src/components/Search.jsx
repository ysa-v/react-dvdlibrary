import { useState } from "react";
import { Link } from "react-router-dom";
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

      <nav className="w-full flex justify-end mt-8">
        <Link
          to="/add"
          className=" w-11/12 m-auto lg:w-1/6 text-center text-lg py-4 px-6 rounded-full border-2 lg:mr-16 text-gray-100 border-green-600 bg-green-600 hover:bg-gray-50 hover:border-green-600  hover:text-green-600 hover:shadow-2xl  "
        >
          Add DVD
        </Link>
      </nav>

      <div>
        <SearchCategory
          searchCategory={getSearchCategory}
          />
      </div>
      <div>
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
                  <strong>Sorry!</strong> There are no Dvds in {userSearchCategory} found with {" "}
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
    </div>
  );
}

export default Search;
