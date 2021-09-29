import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { FormSearch } from "../../components/FormSearch/FormSearch";
import { searchMovies } from "../../store/fetch";
import { MoviesList } from "../../components/MoviesList/MoviesList";

export default function MoviesPage() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useHistory();

  const onSearchValueInput = (value) => {
    setInput(value);
    history.push({ search: `query=${value}` });
  };

  const lastValueInput = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!input) {
      return;
    }
    searchMovies(input)
      .then((rest) => rest.json())
      .then((rest) => setMovies(rest.results))
      .catch((error) => {
        setError(error);
      });
  }, [input]);

  useEffect(() => {
    if (!lastValueInput) {
      setMovies([]);
    } else {
      searchMovies(lastValueInput)
        .then((rest) => rest.json())
        .then((rest) => setMovies(rest.results))
        .catch((error) => {
          setError(error);
        });
    }
  }, [lastValueInput]);

  if (error) {
    return <h3>{error}</h3>;
  } else {
    return (
      <>
        <FormSearch onSubmit={onSearchValueInput} />
        <MoviesList movies={movies} />
      </>
    );
  }
}
