"use client";

import { experimental_useFormState as useFormState } from "react-dom";
import { createAccount } from "@/actions/actions";
import FormButton from "./shared/FormButton";
import Alert from "./shared/Alert";

const CreateAccountForm = () => {
  const [state, formAction] = useFormState(createAccount, null);

  return (
    <form action={(formData: FormData) => formAction(formData)}>
      <div className="form-control mb-2">
        <input type="email" placeholder="E-Mail" id="email" name="email" className="input input-bordered" required />
      </div>
      <div className="form-control mb-2">
        <input type="text" placeholder="Firstname" id="firstname" name="firstname" className="input input-bordered" />
      </div>
      <div className="form-control mb-2">
        <input type="text" placeholder="Lastname" id="lastname" name="lastname" className="input input-bordered" />
      </div>
      <div className="form-control mb-2">
        <input type="password" placeholder="Password" id="password" name="password" className="input input-bordered" required />
      </div>
      <div className="mb-2">{state && state.error && <Alert message={state.message.toString()} alertType="error" alertState={state} />}</div>
      <div className="form-control mt-6">
        <FormButton text="Submit" />
      </div>
    </form>
  );
};

export default CreateAccountForm;
