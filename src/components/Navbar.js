import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="text-white flex justify-between items-center py-4 px-6 z-[100] w-full absolute ">
        <Link to={"/"}>
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer ">
            NETFLIX
          </h1>
        </Link>
        <div>
          <Link to={"/login"}>
            <button className="pr-4 ">Sign In</button>
          </Link>
          <Link to={"/signup"}>
            <button className=" bg-red-600 px-6 py-2 text-white rounded cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
