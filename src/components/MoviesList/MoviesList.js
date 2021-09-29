import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import css from "./MoviesList.module.css";

export function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ol className={css.list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={css.item}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { state: location.pathname, search: location.search },
              }}
            >
              {movie.original_title || movie.original_name}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

MoviesList.propType = {
  movies: PropTypes.array,
};
