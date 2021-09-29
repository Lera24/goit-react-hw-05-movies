import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getConfigurationImg } from "../../store/fetch";
import css from "./ActorsList.module.css";

export function ActorsList({ actors }) {
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

  return (
    <ul className={css.list}>
      {actors.map((actor) => {
        if (error) {
          return <h3>{error}</h3>;
        } else {
          return (
            <li className={css.item} key={actor.id}>
              <img
                className={css.image}
                src={`${paramsImg}original${actor.profile_path}`}
                style={{ width: 150 }}
              />
              <p className={css.desc}>{actor.name}</p>
            </li>
          );
        }
      })}
    </ul>
  );
}

ActorsList.propType = {
  actors: PropTypes.array,
};
