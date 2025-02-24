import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Pagenotfound() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
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
      </div>
      <Footer />
    </>
  );
}

export default Pagenotfound;
