import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeleteDvd() {
  const navigate = useNavigate();
  const [dvdId, setDvdId] = useState("");

  async function deleteDvd(event) {
    event.preventDefault();
    fetch(`http://dvd-library.us-east-1.elasticbeanstalk.com/dvd/${dvdId}`, {
      method: "DELETE",
    }).then((res) => {
      //deleted
    });
  }

  navigate("/");

  return (
    <>
      <nav className="md:w-3/4 m-auto mt-8">
        <button
          aria-label="Navigates back to the home page"
          onClick={() => navigate("/")}
        >
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
      <h1 className="w-full bg-green-600 text-gray-100 text-center py-4 text-4xl uppercase tracking-wide mt-20 md:w-1/2 mx-auto rounded-t-md">
        Delete A DVD
      </h1>
      <form
        className="grid grid-cols-2 md:w-1/2 mx-auto shadow-2xl rounded-md p-8"
        onSubmit={(e) => deleteDvd(e)}
      >
        {/* ID */}
        <div className="w-full px-3 mb-6 md:mb-4">
          <label
            htmlFor="dvdId"
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
          >
            <strong className="text-red-400">*</strong>ID:
          </label>
          <input
            type="number"
            id="dvdId"
            value={dvdId}
            onChange={(e) => setDvdId(e.target.value)}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <button
          type="submit"
          className="col-span-full text-lg border-2 text-gray-100 border-green-600 bg-green-600 hover:bg-gray-50 hover:border-green-600  hover:text-green-600 hover:shadow-2xl  lg:w-2/5  justify-self-center rounded-full py-3 px-4 shadow-lg"
        >
          Delete DVD
        </button>
      </form>
    </>
  );
}

export default DeleteDvd;
