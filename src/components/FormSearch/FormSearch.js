import { useState } from "react";
import PropTypes from "prop-types";
import css from "./FormSearch.module.css";

export function FormSearch({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input className={css.input} value={value} onInput={handleValue} />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
}

FormSearch.propType = {
  onSubmit: PropTypes.func,
};
