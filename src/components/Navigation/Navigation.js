import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.wrap}>
        <NavLink
          exact
          to="/"
          className={css.link}
          activeClassName={css.activeLink}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={css.link}
          activeClassName={css.activeLink}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
