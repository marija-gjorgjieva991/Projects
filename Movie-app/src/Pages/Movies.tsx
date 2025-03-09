import React from "react";
import { useState } from "react";
import { MovieList } from "../Components/MovieList";
import { SearchBar } from "../Components/SearchBar";

export const Movies: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const fetchPopularMovies = async () => {
    const apiKey = "c7d7bc05e9d0f9f1129dfad2c27cefd8";
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`
    );
    const data = await response.json();
    return data.results;
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <h1>Popular</h1>
      <MovieList fetchMovies={fetchPopularMovies} searchQuery={searchQuery} />
    </div>
  );
};
