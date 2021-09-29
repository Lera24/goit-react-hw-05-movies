import PropTypes from "prop-types";
import css from "./ListGenres.module.css";

export function ListGenres({ genres }) {
  if (!genres) {
    return null;
  }
  return (
    <ul className={css.list}>
      {genres.map((genre) => (
        <li key={genre.id} className={css.item}>
          {genre.name}
        </li>
      ))}
    </ul>
  );
}

ListGenres.propType = {
  genres: PropTypes.array,
};
