import {useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import useFetch from "../hooks/useFetch";
import contactImgUrl from "url:../images/baseline_perm_identity_black_48dp.png";

function DvdDetails() {
    let { dvdID } = useParams();
    const navigate = useNavigate();
    let url = 'http://dvd-library.us-east-1.elasticbeanstalk.com/dvds/${dvdID}';
    const [data, error] = useFetch(url);
    const [updateDvdData, setUpdateDvdData] = useState(data);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        setUpdateDvdData(data);
      }, [data]);

    function handleUpdatingValue(e) {
        setUpdateDvdData({
            ...updateDvdData,
            [e.target.id]: e.target.value,
        });
    }

    function updateContact() {
        if (editing === true) {
            setEditing(!editing);

            fetch(url, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(updateDvdData),
            });
        } else {
            setEditing(!editing);
        }
    }

    return (
        <>
            <nav className="md:w-3/4 m-auto mt-8 ">
                <button aria-label="Navigates back to the home page" onClick={() => navigate("/")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 0 24 24"
                        width="48px"
                        fill="#000000"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                    </svg>
                </button>
            </nav>
            {/* Show Error if data is null */}
            {error !== null
                ? (
                    <div
                        className="bg-red-100 border border-red-400 text-red-700  md:w-2/5 lg:max-w-md px-4 py-3 rounded-md m-auto mt-24"
                        role="alert"
                    >
                        <p className=" text-xl text-center">
                            <strong>Sorry!</strong> It seems that this DVD is missing or has been deleted.
                        </p>
                  </div>
                )
                : (
                    <div className="flex flex-col items-center my-16 mx-2 md:w-1/2 lg:w-2/5 md:mx-auto shadow-xl bg-gray-50 rounded  pt-8 p-4 px-8">
                    <div className="flex flex-col items-center ">
                        
                        {/* Start of Title */}
                        <div className="flex flex-col justify-center w-64 h-64 bg-gray-300 border-gray-300 rounded-full border-2 shadow-xl text-center p-8 -m-32">
                            {!editing
                                ? (
                                    <h1 className="text-2xl font-semibold">
                                        {`${updateDvdData.title}`}
                                    </h1>
                                )
                                : (
                                    <form className="flex justify-around ">
                                        <label htmlFor="title" className="sr-only">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            id="title"
                                            placeholder={updateDvdData.title}
                                            onChange={handleUpdatingValue}
                                            className="font-light text-xl w-24 mr-2 p-1 rounded"
                                        />
                                    </form>
                                )
                            }
                        </div>
                        {/* End of Title */}

                        {/* Remaining DVD fields */}
                        {!editing
                            ? (
                                <div className="grid grid-cols-2 gap-3 items-center justify-items-center mt-32 pt-8">
                                    {/* Release Date */}
                                    <h2 className="font-bold text-xl ">Release Date:</h2>
                                    <p className="font-light text-xl p-1 rounded ">
                                        {updateDvdData.releaseDate}
                                    </p>

                                    {/* Director */}
                                    <h2 className="font-bold text-xl">Director:</h2>
                                    <p className="font-light text-xl p-1 rounded ">
                                        {updateDvdData.director}
                                    </p>

                                    {/* Rating */}
                                    <h2 className="font-bold text-xl">Rating:</h2>
                                    <p className="font-light text-xl p-1 rounded">
                                        {updateDvdData.rating}
                                    </p>

                                    {/* Notes */}
                                    <h2 className="font-bold text-xl">Notes:</h2>
                                    <p className="font-light text-xl p-1 rounded">
                                        {updateDvdData.notes}
                                    </p>
                                </div>
                            )
                            : (
                                <form className="grid grid-cols-2 gap-3 items-center justify-items-center mt-32 pt-8">
                                    <label htmlFor="releaseDate" className="font-bold text-xl">
                                        Release Date:
                                    </label>
                                    <input
                                        type="text"
                                        id="releaseDate"
                                        placeholder={updateDvdData.releaseDate}
                                        onChange={handleUpdatingValue}
                                        className="font-light text-xl"
                                    />
                                    <label htmlFor="director" className="font-bold text-xl">
                                        Director:
                                    </label>
                                    <input
                                        type="text"
                                        id="director"
                                        placeholder={updateDvdData.director}
                                        onChange={handleUpdatingValue}
                                        className="font-light text-xl"
                                    />
                                    <label htmlFor="rating" className="font-bold text-xl">
                                        Rating:
                                    </label>
                                    <select
                                        id="rating"
                                        placeholder={updateDvdData.rating}
                                        onChange={handleUpdatingValue}
                                        className="font-light text-xl"
                                    >
                                        <option value="">--Please select a rating--</option>
                                        <option value="G">G</option>
                                        <option value="PG">PG</option>
                                        <option value="PG-13">PG-13</option>
                                        <option value="R">R</option>
                                        <option value="NC-17">NC-17</option>
                                        <option value="NR">NR: Not Rated</option>
                                    </select>
                              </form>
                            )
                        }
                        {/* End of DVD fields */}

                    </div>
                  </div>
                )
            }
        </>
    );
}

export default DvdDetails;