import "./App.css";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /*webpackChunkName: "home-page"*/)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage" /*webpackChunkName: "movie-page"*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage" /*webpackChunkName: "movie-details-page"*/
  )
);

function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<h1>Loading, please wait</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
