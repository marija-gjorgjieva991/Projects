import React, { useState, useEffect } from "react";
import { Movie } from "../data";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export interface MovieListProps {
  fetchMovies: () => Promise<Movie[]>; 
  searchQuery: string; 
}

export const MovieList: React.FC<MovieListProps> = ({
  fetchMovies,
  searchQuery,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); 

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const movieData = await fetchMovies();
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("There was an error fetching the movies.");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [fetchMovies]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading movies...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const toggleFavorite = (movie: Movie) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === movie.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); 
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie); 
  };

  return (
    <div className="movies-container">
      <h2>Movies</h2>
      {selectedMovie ? (
        <div className="movie-details">
          <h3>{selectedMovie.title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
            className="movie-image"
          />
          <p>{selectedMovie.overview}</p>
          <p>{selectedMovie.release_date}</p>
          <button className="btn-back" onClick={() => setSelectedMovie(null)}>
            Go Back
          </button>
        </div>
      ) : (
        <div className="movie-section">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="movie-box"
              onClick={() => handleMovieClick(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
              />
              <h3>{movie.title}</h3>
              <div className="heart-icon-container">
                <IconButton
                  style={{ color: "white" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(movie);
                  }}
                >
                  {favorites.some((fav) => fav.id === movie.id) ? (
                    <Favorite style={{ color: "red" }} />
                  ) : (
                    <FavoriteBorder />
                  )}
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
