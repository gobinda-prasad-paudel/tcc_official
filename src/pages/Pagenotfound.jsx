import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Pagenotfound() {
  return (
    <>
      <Navbar />
      {/* <div className="container mx-auto px-4">
        <div className="flex items-center flex-col justify-center h-screen">
          <h1 className="text-4xl font-bold text-[#3498db]">
            404 Page Not Found
          </h1>
          <div>
            <p className="text-3xl font-500  ">Contact developer</p>
            <Link
              className="underline text-2xl font-bold text-cyan-600 hover:text-cyan-900"
              to="/developer"
            >
              {" "}
              Developer
            </Link>
            <br />
            <Link
            className="underline text-2xl font-bold text-gray-700 hover:text-gray-900"
            to="/"
            >
            Go back to home
            </Link>
            </div>
            </div>
            </div> */}

      <div className="flex flex-col items-center justify-center min-h-screen text-gray-300 ">
        <h1 className="text-9xl font-bold text-gray-500">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Not Found</h2>
        <p className="text-lg mt-2 ">
          The resource requested could not be found on this server!
        </p>

        <Link
          className="text-lg mt-2 text-red-600 hover:text-red-800"
          to="/developer"
        >
          {" "}
          Contact Developer
        </Link>
        <Link className="text-lg mt-2 text-red-600 hover:text-red-800" to="/">
          {" "}
          Back To Home
        </Link>
      </div>
    </>
  );
}

export default Pagenotfound;
