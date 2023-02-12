import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "./components/Heading";
import SearchBox from "./components/SearchBox";
import AddFavourtite from "./components/AddFavourtite";
import RemoveFavourites from "./components/RemoveFavourites";

function App() {
  const [movie, setMoive] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [favourties, setFavourties] = useState([]);

  const getMovies = async () => {
    const apiUrl = `https://www.omdbapi.com/?apikey=664755fc&s=${searchKey}`;
    const res = await fetch(apiUrl);
    const response = await res.json();
    if (response.Search) {
      setMoive(response.Search);
    }
  };

  useEffect(() => {
    getMovies();
  }, [searchKey]);

  const addFavourtitesMovie = (movie) => {
    console.log("fav clicked");

    setFavourties((prevValue) => {
      return [...prevValue, movie];
    });
  };

  const removeFavourtitesMovie = (movie, index) => {
    setFavourties((prevValue) => {
      return prevValue.filter((item, idx) => {
        return idx !== index;
      });
    });
  };

  return (
    <div>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center">
          <Heading heading="Movies" />
          <SearchBox searchKey={searchKey} setSearchKey={setSearchKey} />
        </div>
        <div className="row">
          <MovieList
            movie={movie}
            AddFavourtite={AddFavourtite}
            handleFavouriteClick={addFavourtitesMovie}
          />
        </div>
        <div className="row d-flex align-items-center">
          <Heading heading="Favourites" />
        </div>
        <div className="row">
          <MovieList
            movie={favourties}
            AddFavourtite={RemoveFavourites}
            handleFavouriteClick={removeFavourtitesMovie}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
