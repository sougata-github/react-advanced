import { useState } from "react";

export function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent, callback: (values?: T) => void) => {
    e.preventDefault();
    setSubmitted(true);
    callback(values);
  };

  return {
    values,
    submitted,
    handleChange,
    handleSubmit,
  };
}
