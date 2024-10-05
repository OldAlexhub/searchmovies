import React from "react";
import One from "../images/1.webp";
import Two from "../images/2.webp";
import Three from "../images/3.webp";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Introduction Section */}
        <div className="col-md-12 text-center mb-5">
          <h1>Welcome to MovieVerse AI</h1>
          <p className="lead">
            Discover movies in a whole new way! Whether you remember bits and
            pieces of a plot or want to explore films based on certain topics,
            our advanced AI is here to provide the best recommendations for you.
          </p>
        </div>

        {/* AI Feature 1 - Find Movies Based on Plot or Topic */}
        <div className="col-md-6">
          <h2>Search Movies by Plot or Topic</h2>
          <p>
            If you only recall fragments of a movie’s plot or want to watch
            something centered around a particular theme or topic, just provide
            some key details. Our AI will work behind the scenes to find the top
            5 movies that match your description.
          </p>
        </div>
        <div className="col-md-6">
          {/* AI Plot Search Image with adjusted style */}
          <img
            src={One}
            alt="AI searching movies by plot"
            className="img-fluid rounded shadow-lg"
            style={{ objectFit: "cover", maxHeight: "300px" }}
          />
        </div>

        {/* AI Feature 2 - Discover Movies Based on Components */}
        <div className="col-md-6 mt-5">
          {/* AI Components Search Image with adjusted style */}
          <img
            src={Two}
            alt="AI searching movies by components"
            className="img-fluid rounded shadow-lg"
            style={{ objectFit: "cover", maxHeight: "300px" }}
          />
        </div>
        <div className="col-md-6 mt-5">
          <h2>Discover Movies by Entering Components</h2>
          <p>
            Not sure about the movie name, but know some details? By entering
            specific components or characteristics of a film (such as genre,
            release year, or plot), our AI will search the best top 10 rated
            movies that fit what you're looking for. The more information you
            provide, the better the results!
          </p>
        </div>

        {/* Call to Action */}
        <div className="col-md-12 text-center mt-5">
          <h3>Experience the Power of AI Movie Discovery</h3>
          <p>Start exploring now and find the perfect movie for your mood!</p>
          {/* Call to Action Image with adjusted style */}
          <img
            src={Three}
            alt="AI powered movie discovery"
            className="img-fluid rounded shadow-lg"
            style={{ objectFit: "cover", maxHeight: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
