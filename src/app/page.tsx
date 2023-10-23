import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { signJWT, compare } from "@/utils/authHelper";

const submit = async (formData: FormData) => {
  "use server";
  //Server side input validation / Check for empty form fields
  const mail = formData.get("email");
  const passwd = formData.get("password");
  if (mail?.length === 0) return;
  if (passwd?.length === 0) return;

  //Fetch user from api
  const response = await fetch(`${process.env.HOST_DEV}/api/v1.0/users/?email=${mail}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    //TODO - Render Failure (user not found)
    console.log("Wrong username or password");
    return;
  }
  //Get userdata from reponse
  const { id, email, password, firstname, lastname, created, updated } = await response.json();
  //Check user password
  const passwordMatch = await compare(passwd?.toString()!, password);
  if (passwordMatch) {
    //Create JWT
    const token = await signJWT({ id, email, firstname, lastname, created, updated });
    cookies().set("token", token);
    redirect("/home");
  }
};

export default function Login() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:ml-5">
          <h1 className="text-5xl font-bold">Todo's</h1>
          <p className="py-6">Login to create and manage your Todo's.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" action={submit}>
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
