import { Route, useHistory, useLocation, useParams } from "react-router";
import { useState, useEffect, lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";
import { getMovieDetails } from "../../store/fetch";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import css from "./MovieDetailsPage.module.css";

const Cast = lazy(() =>
  import("../../components/Cast/Cast" /*webpackChunkName: "cast"*/)
);
const Reviews = lazy(() =>
  import("../../components/Reviews/Reviews" /*webpackChunkName: "reviews"*/)
);

export default function MovieDetailsPage() {
  const [movie, setMovies] = useState([]);
  const [error, setError] = useState("");
  const { movieId } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!movie) {
      return;
    }
    getMovieDetails(movieId)
      .then((resp) => resp.json())
      .then((resp) => setMovies(resp))
      .catch((error) => {
        setError(error);
      });
  }, []);

  const onGoBack = () => {
    history.push(location.state.state + location.state.search);
  };

  if (error) {
    return <h3>{error}</h3>;
  } else {
    return (
      <>
        <button type="button" onClick={onGoBack} className={css.button}>
          Go back
        </button>
        <MovieDetails movie={movie} />
        <h3 className={css.subTitle}>Additional information</h3>
        <ul className={css.list}>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/cast`,
                state: location.state,
              }}
              className={css.item}
              activeClassName={css.activeLink}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/reviews`,
                state: location.state,
              }}
              activeClassName={css.activeLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<h3>Loading, please wait</h3>}>
          <Route path={`/movies/${movieId}/cast`}>
            <Cast movieId={movieId} />
          </Route>
        </Suspense>

        <Suspense fallback={<h3>Loading, please wait</h3>}>
          <Route path={`/movies/${movieId}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Suspense>
      </>
    );
  }
}
