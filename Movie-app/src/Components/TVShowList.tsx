import React from "react";
import { TVShow } from "../data";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

interface TVShowListProps {
  tvShows: TVShow[];
  favorites: TVShow[];
  toggleFavorite: (tvShow: TVShow) => void;
  handleTVShowClick: (tvShow: TVShow) => void;
}

const TVShowList: React.FC<TVShowListProps> = ({
  tvShows,
  favorites,
  toggleFavorite,
  handleTVShowClick,
}) => {
  return (
    <div className="movie-section">
      {tvShows.map((tvShow) => (
        <div
          key={tvShow.id}
          className="movie-box"
          onClick={() => handleTVShowClick(tvShow)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
            alt={tvShow.name}
            className="movie-image"
          />
          <h3>{tvShow.name}</h3>
          <div className="heart-icon-container">
            <IconButton
              style={{ color: "white" }}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(tvShow);
              }}
            >
              {favorites.some((fav) => fav.id === tvShow.id) ? (
                <Favorite style={{ color: "red" }} />
              ) : (
                <FavoriteBorder />
              )}
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TVShowList;
