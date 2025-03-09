import React, { useState, useEffect } from "react";
import { fetchTrendingTVShows, fetchRecommendedTVShows } from "../data";
import { TVShow } from "../data";
import TVShowList from "../Components/TVShowList";
import { SearchBar } from "../Components/SearchBar";

export const TvSeries: React.FC = () => {
  const [trendingTVShows, setTrendingTVShows] = useState<TVShow[]>([]);
  const [recommendedTVShows, setRecommendedTVShows] = useState<TVShow[]>([]);
  const [favorites, setFavorites] = useState<TVShow[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTVShow, setSelectedTVShow] = useState<TVShow | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const getTrendingTVShows = async () => {
      const tvData = await fetchTrendingTVShows();
      setTrendingTVShows(tvData);
    };
    getTrendingTVShows();
  }, []);

  useEffect(() => {
    if (trendingTVShows.length > 0) {
      const fetchRecommendedTVShowsData = async () => {
        try {
          const recommendedData = await fetchRecommendedTVShows(
            trendingTVShows[0].id
          );
          setRecommendedTVShows(recommendedData);
        } catch (err) {
          console.error("Failed to fetch recommended TV shows:", err);
        }
      };
      fetchRecommendedTVShowsData();
    }
  }, [trendingTVShows]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (tvShow: TVShow) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === tvShow.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== tvShow.id);
    } else {
      updatedFavorites = [...favorites, tvShow];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const filteredTrendingTVShows = trendingTVShows.filter((tvShow) =>
    tvShow.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredRecommendedTVShows = recommendedTVShows.filter((tvShow) =>
    tvShow.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTVShowClick = (tvShow: TVShow) => {
    setSelectedTVShow(tvShow);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <h1>TV Series</h1>

      {selectedTVShow ? (
        <div className="movie-details">
          <h3>{selectedTVShow.name}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedTVShow.poster_path}`}
            alt={selectedTVShow.name}
            className="tv-show-image"
          />
          <p>{selectedTVShow.overview}</p>
          <p>First Air Date: {selectedTVShow.first_air_date}</p>
          <p>Vote Average: {selectedTVShow.vote_average}</p>
          <button className="btn-back" onClick={() => setSelectedTVShow(null)}>
            Go Back
          </button>
        </div>
      ) : (
        <div>
          <TVShowList
            tvShows={filteredTrendingTVShows}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            handleTVShowClick={handleTVShowClick}
          />

          {recommendedTVShows.length > 0 && (
            <div>
              <h2>Recommended For You</h2>
              <TVShowList
                tvShows={filteredRecommendedTVShows}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                handleTVShowClick={handleTVShowClick}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
