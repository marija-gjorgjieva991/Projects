import React, { useState, useEffect } from "react";
import { MediaItem } from "../data";

export const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<MediaItem[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  const handleDelete = (id: number) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="movies-container">
      <h2>Your Favorite Movies & TV Shows</h2>
      {favorites.length === 0 ? (
        <p>You have no favorite movies or TV shows added yet.</p>
      ) : (
        <div className="movie-section">
          {favorites.map((item) => (
            <div key={item.id} className="movie-box">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className="movie-image"
              />
              <h3>{item.title || item.name}</h3>
              <p>{item.overview}</p>
              <p>{item.release_date || item.first_air_date}</p>
              <button
                className="btn-delete"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
