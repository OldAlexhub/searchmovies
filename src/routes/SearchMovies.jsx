import React from "react";
import Logo from "../images/logo.webp";

const SearchMovies = () => {
  return (
    <div>
      <form>
        <img src={Logo} alt="logo" />
        <input name="releaseYear" placeholder="Release Year" type="number" />
        <input name="genre" placeholder="Genre" type="text" />
        <input />
      </form>
    </div>
  );
};

export default SearchMovies;
