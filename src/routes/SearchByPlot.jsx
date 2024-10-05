import React, { useState } from "react";
import Logo from "../images/logo.webp";
import axios from "axios";

const SearchByPlot = () => {
  const [formData, setFormData] = useState({
    userQuery: "",
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message before each request
    setLoading(true); // Set loading to true when the search starts
    setResults([]); // Clear previous results

    try {
      const response = await axios.post(
        process.env.REACT_APP_SEARCH_MOVIES,
        formData
      );

      if (response.status === 200) {
        setResults(response.data.results);
        setFormData({ userQuery: "" }); // Clear the form after a successful search
      } else {
        setError("Unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred during API request:", error);
      setError("Server error occurred. Please try again later.");
    }
    setLoading(false); // Set loading to false when the search is complete
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Logo */}
          <div className="text-center mb-4">
            <img
              src={Logo}
              alt="logo"
              className="img-fluid"
              style={{ maxWidth: "200px", borderRadius: "20px" }}
            />
          </div>

          {/* Form */}
          <form className="text-center" onSubmit={handleSubmit}>
            <h2 className="mb-3">Search Movies by Plot</h2>
            <p className="mb-4">
              Remember bits and pieces of a movie plot? Enter as much as you can
              remember, and our AI will find the top movie matches! Or, if you
              can simply describe a movie plot that you think you would like to
              watch, our AI will do its best to find what you're looking for.
            </p>

            {/* Textarea for plot input */}
            <div className="form-group mb-4">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Enter the movie plot ..."
                value={formData.userQuery}
                onChange={handleChange}
                name="userQuery"
              ></textarea>
            </div>

            {/* Search Button */}
            <button type="submit" className="btn btn-primary btn-lg">
              Search Now
            </button>

            {/* Error Message */}
            {error && <p className="text-danger mt-3">{error}</p>}
          </form>
        </div>
      </div>

      {/* Loading Feedback */}
      {loading && (
        <div className="text-center mt-5">
          <h3>🚀 Searching the cosmos for your top 5 movies...</h3>
          <p className="text-muted">
            Hold tight as our AI scours the universe to find your perfect match!
          </p>
        </div>
      )}

      {/* Display Search Results */}
      {!loading && results.length > 0 && (
        <div className="mt-5">
          <h3 className="text-center mb-4">Search Results:</h3>
          <div className="row">
            {results.map((result, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm movie-card">
                  <img
                    src={result.poster}
                    alt={`${result.title} poster`}
                    className="card-img-top movie-poster"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{result.title}</h5>
                    <p className="card-text text-muted text-center">
                      {result.releaseYear}
                    </p>
                    <p className="text-muted text-center">
                      <strong>Rating:</strong> {result.rating}
                    </p>
                    <p className="text-muted text-center">
                      <strong>Genres:</strong> {result.genres}
                    </p>
                    <p className="card-text movie-plot">{result.plot}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {!loading && results.length === 0 && !error && (
        <div className="mt-5 text-center">
          <p>No results found for your search query.</p>
        </div>
      )}
    </div>
  );
};

export default SearchByPlot;
