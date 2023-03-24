import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Input = ({ id, label, type, isrequired, isReadonly, unit }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className=" mb-3">
      <label className="form-label">{label}</label>
      <div className="input-group mb-3">
        <input
          type={type}
          className="form-control"
          id={id}
          readOnly={isReadonly}
          required={isrequired}
          defaultValue="0"
          onChange={(event) => handleChange(id, event)}
        />
        {type !== "date" ? (
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              {unit}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
