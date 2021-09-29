import { useEffect, useState } from "react";
import { searchTopMovies } from "../../store/fetch";
import { MoviesList } from "../../components/MoviesList/MoviesList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    searchTopMovies()
      .then((resp) => resp.json())
      .then((resp) => setMovies(resp.results))
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <h3>{error}</h3>;
  } else {
    return <MoviesList movies={movies} />;
  }
}
