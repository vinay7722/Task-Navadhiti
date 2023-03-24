import React from "react";
import Input from "./elements/Input";
import Select from "./elements/Select";
const Element = ({
  field: { type, key, label, isRequired,isReadonly, items,unit },
}) => {
  switch (type) {
    case "date":
      return (
        <Input
          id={key}
          label={label}
          isrequired={isRequired}
          isReadonly={isReadonly}
          type={type}
          
        />
      );
    case "number":
      return (
        <Input
          id={key}
          isrequired={isRequired}
          isReadonly={isReadonly}
          label={label}
          type={type}
          unit={unit}
        />
      );
    case "dropdown":
      return (
        <Select
          id={key}
          isrequired={isRequired}
          isReadonly={isReadonly}
          label={label}
          items={items}
        />
      );

    default:
      return null;
  }
};

export default Element;
