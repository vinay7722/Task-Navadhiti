import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
const Select = ({ key, label, items }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <>
      <label className="form-label">{label}</label>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(event) => handleChange(key, event)}
      >
        {items.length > 0 &&
          items.map((option, i) => (
            <option value={option.value} key={i}>
              {option.text}
            </option>
          ))}
      </select>
    </>
  );
};

export default Select;
