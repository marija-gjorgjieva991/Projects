import React, { useState } from "react";
import { fetchTrendingMovies } from "../data";
import { MovieList } from "../Components/MovieList";
import { SearchBar } from "../Components/SearchBar";

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <h1>Trending</h1>
      <MovieList fetchMovies={fetchTrendingMovies} searchQuery={searchQuery} />
    </div>
  );
};
