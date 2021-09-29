import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getMovieReviews } from "../../store/fetch";
import { ListReviews } from "../ListReviews/ListReviews";
import css from "./Reviews.module.css";

function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!movieId) {
      return;
    }
    getMovieReviews(movieId)
      .then((resp) => resp.json())
      .then((resp) => setReviews(resp.results))
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (reviews.length === 0) {
    return (
      <p className={css.title}>We don't have any reviews for this movie</p>
    );
  } else if (error) {
    return <h3>{error}</h3>;
  } else {
    return <ListReviews reviews={reviews} />;
  }
}

Reviews.propType = {
  movieId: PropTypes.number,
};

export default Reviews;
