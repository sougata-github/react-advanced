import { FormEvent, useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [color, setColor] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.length < 2) {
      setError("Name must be 2 characters long");
    }

    console.log({ name, age, color });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        className="border"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        className="border"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        type="text"
        className="border"
        name="color"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input type="submit" name="submit" placeholder="Submit" />
    </form>
  );
};

export default ControlledForm;
