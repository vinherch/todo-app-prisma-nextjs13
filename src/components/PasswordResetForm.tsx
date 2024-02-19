"use client";

import { experimental_useFormState as useFormState } from "react-dom";
import { handlePasswordReset } from "@/actions/actions";
import FormButton from "./shared/FormButton";

const PasswordResetForm = () => {
  const [state, formAction] = useFormState(handlePasswordReset, null);

  return (
    <form action={(formData: FormData) => formAction(formData)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Email:</span>
        </label>
        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
      </div>
      <div className="form-control mt-6">
        <FormButton text="Submit" />
      </div>
    </form>
  );
};

export default PasswordResetForm;
