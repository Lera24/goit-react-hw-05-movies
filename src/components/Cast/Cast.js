import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getActorsList } from "../../store/fetch";
import { ActorsList } from "../ActorsList/ActorsList";

function Cast({ movieId }) {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!movieId) {
      return;
    }
    getActorsList(movieId)
      .then((resp) => resp.json())
      .then((resp) => setActors(resp.cast))
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <h3>{error}</h3>;
  } else {
    return <ActorsList actors={actors} />;
  }
}

Cast.propType = {
  movieId: PropTypes.number,
};

export default Cast;
