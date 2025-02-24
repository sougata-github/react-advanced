import { ChangeEvent, FormEvent, useState } from "react";

type formSchema = {
  firstName: string;
  lastName: string;
  email: string;
  subscribe: boolean;
  message: string;
};

const ControlledForm = () => {
  const [formData, setFormData] = useState<formSchema>({
    firstName: "",
    lastName: "",
    email: "",
    subscribe: false,
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        className="bg-black/5 p-2 rounded-lg"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className="bg-black/5 p-2 rounded-lg"
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="bg-black/5 p-2 rounded-lg"
      />

      <label>
        <input
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
          className="mr-1"
        />
        Subscribe to Newsletter
      </label>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Enter message"
        className="border border-black/10 p-2 rounded-lg"
      />

      <button type="submit" className="py-2 px-4 bg-black/5 rounded-lg w-fit">
        Submit
      </button>
    </form>
  );
};

export default ControlledForm;
