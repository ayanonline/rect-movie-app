import React from "react";

function MovieList(props) {
  return (
    <>
      {props.movie.map((movie, index) => {
        return (
          <div
            key={movie.imdbID}
            className="image-container d-flex justify-content-start m-3 movi-item"
          >
            <img src={movie.Poster} alt="movie imag3" />
            <div
              onClick={() => props.handleFavouriteClick(movie, index)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <props.AddFavourtite />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MovieList;
