import React, { useState } from "react";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => setIsOpen(!isOpen);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("search:", searchTerm);
    setIsOpen(false);
  };
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-2/4 z-50" : "w-auto "}`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-200 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-500"
            />
            {/* Search icon */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
            {/* Clear icon */}
            <button
              onClick={handleSearchToggle}
              type="button"
              className="absolute right--4 top-1/2 transform -translate-y-1/2 text-red-600 hover:text-red-800"
            >
              <HiMiniXMark className="h-6 w-6" />
            </button>
          </div>
        </form>
      ) : (
        <div>
          <button onClick={() => handleSearchToggle()}>
            <HiMagnifyingGlassCircle className="h-7 w-7 " />
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
