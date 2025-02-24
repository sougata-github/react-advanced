import { FormEvent, useRef } from "react";

const UncontrolledForm = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const colorInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (nameInput.current && ageInput.current && colorInput.current) {
      console.log(nameInput.current.value);
      console.log(ageInput.current.value);
      console.log(colorInput.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border"
        name="name"
        placeholder="Name"
        ref={nameInput}
      />
      <input
        type="number"
        className="border"
        name="age"
        placeholder="Age"
        ref={ageInput}
      />
      <input
        type="text"
        className="border"
        name="color"
        placeholder="Color"
        ref={colorInput}
      />
      <input type="submit" name="submit" placeholder="Submit" />
    </form>
  );
};

export default UncontrolledForm;
