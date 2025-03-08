import { useForm } from "../../hooks/useForm";

type formSchema = {
  name: string;
  email: string;
};

const initialValues: formSchema = {
  name: "",
  email: "",
};

const MyForm = () => {
  const { values, submitted, handleChange, handleSubmit } =
    useForm<formSchema>(initialValues);

  const onSubmit = (values: formSchema | undefined) => {
    console.log(values);
  };

  return (
    <>
      {submitted ? (
        <div className="flex flex-col p-20 gap-5">
          <p>Form submitted sucessfully.</p>
          <p className="text-xs">Name: {values.name}</p>
          <p className="text-xs">Email: {values.email}</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => handleSubmit(e, onSubmit)}
          className="flex flex-col gap-5 max-w-md p-20"
        >
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={(e) => handleChange(e)}
            className="bg-black/5 p-2 rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={(e) => handleChange(e)}
            className="bg-black/5 p-2 rounded-lg"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-black/5 rounded-lg w-full cursor-pointer hover:bg-black/10 transition"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default MyForm;
