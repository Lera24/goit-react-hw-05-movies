import PropTypes from "prop-types";
import css from "./ListReviews.module.css";

export function ListReviews({ reviews }) {
  return (
    <ul className={css.list}>
      {reviews.map((review) => {
        return (
          <li className={css.item} key={review.id}>
            <span className={css.title}>{review.author}</span>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
}

ListReviews.propType = {
  reviews: PropTypes.array,
};
