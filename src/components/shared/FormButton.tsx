"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

type FormButtonProps = {
  text: string;
};

const FormButton = ({ text }: FormButtonProps) => {
  const { pending } = useFormStatus();

  return <button className="btn btn-primary">{pending ? "Submitting" : text}</button>;
};

export default FormButton;
