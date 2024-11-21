/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => {
  return (
    <div className=" sticky top-0 flex justify-between p-5 bg-blue-200">
      <div className="w-96 pl-5 text-2xl font-bold">
        Movie Booking
      </div>
      <ul className="flex w-96 justify-evenly">
        <li className="text-lg p-1 hover:rounded-md hover:bg-blue-400 delay-150 duration-150 ease-in-out">Home</li>
        <li className="text-lg p-1 hover:rounded-md hover:bg-blue-400 delay-150 duration-150 ease-in-out">About</li>
        <li className="text-lg p-1 hover:rounded-md hover:bg-blue-400 delay-150 duration-150 ease-in-out">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
