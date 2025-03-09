export interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

export interface TVShow {
  id: number;
  name: string;
  first_air_date: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

export interface MediaItem {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  overview: string;
  first_air_date?: string;
  release_date?: string;
}

export interface MovieSearchResponse {
  results: Movie[];
  total_results: number;
}

const apiKey = "c7d7bc05e9d0f9f1129dfad2c27cefd8";

export const fetchMovies = async (searchTerm: string): Promise<Movie[]> => {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&page=1`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data: MovieSearchResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchTrendingMovies = async (): Promise<Movie[]> => {
  try {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=1`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch trending movies");
    }

    const data: MovieSearchResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};

export const fetchTrendingTVShows = async (): Promise<TVShow[]> => {
  const apiKey = "c7d7bc05e9d0f9f1129dfad2c27cefd8";
  const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
};

export const fetchRecommendedTVShows = async (
  tvShowId: number
): Promise<TVShow[]> => {
  const apiKey = "c7d7bc05e9d0f9f1129dfad2c27cefd8";
  const url = `https://api.themoviedb.org/3/tv/${tvShowId}/recommendations?api_key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
};
