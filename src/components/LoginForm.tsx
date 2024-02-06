"use client";
import { experimental_useFormState as useFormState } from "react-dom";
import { handleFormData } from "@/actions/actions";
import FormButton from "./shared/FormButton";
import Alert from "./shared/Alert";
import { useRef } from "react";

export default function LoginForm() {
  const [state, formAction] = useFormState(handleFormData, null);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:ml-5">
          <h1 className="text-5xl font-bold">Todo's</h1>
          <p className="py-6">Login to create and manage your Todo's.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            className="card-body"
            action={(formData: FormData) => {
              formAction(formData);
              formRef.current?.reset();
            }}
            ref={formRef}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
              <label className="label">
                <a href="/reset" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <FormButton text="Login" />
            </div>
          </form>
          {state && state.error && <Alert message={state.message!} alertType="error" alertState={state} />}
        </div>
      </div>
    </div>
  );
}
