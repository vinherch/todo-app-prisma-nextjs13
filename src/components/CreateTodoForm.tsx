"use client";

import { experimental_useFormState as useFormState } from "react-dom";
import { createNewTodo } from "@/actions/actions";
import FormButton from "./shared/FormButton";
import Alert from "./shared/Alert";

const CreateTodoForm = () => {
  const [state, formAction] = useFormState(createNewTodo, null);

  return (
    <>
      <form className="flex flex-col gap-3 w-full lg:w-1/2" action={(formData: FormData) => formAction(formData)}>
        <div className="form-control">
          <input type="text" placeholder="Title" id="title" name="title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <textarea className="textarea textarea-bordered h-32" id="description" name="description" placeholder="Description"></textarea>
        </div>
        <div className="form-control mt-6">
          <FormButton text="Create" />
        </div>
        {state && state.error && <Alert message={state.message.toString()} alertType="error" alertState={state} />}
      </form>
    </>
  );
};

export default CreateTodoForm;
