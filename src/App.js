import drug1 from "./drug1.json";
import drug2 from "./drug2.json";
import { useState, useEffect } from "react";
import Element from "./components/Element";
import { FormContext } from "./FormContext";
function App() {
  const [elements, setElements] = useState(null);

  useEffect(() => {
    setElements(drug2);
  }, []);

  const { fields } = elements ?? {};

  const handleChange = (id, event) => {
    const newElements = { ...elements };
    newElements.fields.forEach((field) => {
      const { key } = field;
      if (id === key) {
        field["value"] = event.target.value;
      }
      setElements(newElements);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Check Console")
    console.log(elements)
  }

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container mt-5">
        <form>
          {fields
            ? fields
                .sort((a, b) => a.order - b.order) //sorting order wise fields
                .map((field, i) => <Element key={i} field={field} />)
            : null}
            <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;
