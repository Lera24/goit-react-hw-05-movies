import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getConfigurationImg } from "../../store/fetch";
import { ListGenres } from "../ListGenres/ListGenres";
import css from "./MovieDetails.module.css";

function MovieDetails({ movie }) {
  const [paramsImg, setParamsImg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getConfigurationImg()
      .then((resp) => resp.json())
      .then((resp) => setParamsImg(resp.images.base_url))
      .catch((error) => {
        setError(error);
      });
  }, []);

  const releaseDate = (date) => {
    if (!date) {
      return;
    }
    const year = `(${date.slice(0, 4)})`;
    return year;
  };

  if (error) {
    return <h3>{error}</h3>;
  } else {
    return (
      <div className={css.wrap}>
        <img
          src={`${paramsImg}original${movie.poster_path}`}
          className={css.image}
        />
        <div>
          <h2 className={css.title}>
            {movie.original_title || movie.original_name}{" "}
            <span>{releaseDate(movie.release_date)}</span>
          </h2>
          <h3 className={css.subTitle}>User Score: </h3>
          <span>{movie.vote_average}</span>
          <h3 className={css.subTitle}>Overview: </h3>
          <p className={css.desc}>{movie.overview}</p>
          <h3 className={css.subTitle}>Genres</h3>
          <ListGenres genres={movie.genres} />
        </div>
      </div>
    );
  }
}

MovieDetails.propType = {
  movie: PropTypes.object,
};

export default MovieDetails;
