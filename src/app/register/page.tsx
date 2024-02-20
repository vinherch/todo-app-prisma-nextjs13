import CreateAccountForm from "@/components/CreateAccountForm";
import Image from "next/image";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-5 gap-3 m-auto xl:flex-row">
      <div className="mb-5 xl:mb-0">
        <Image src={"/register.svg"} alt="Illustration reset password" priority={true} height={430} width={430} />
      </div>
      <div className="w-96">
        <div className="mb-5 text-center">
          <p className="text-2xl">Create your Account</p>
        </div>
        <CreateAccountForm />
      </div>
    </div>
  );
};

export default Register;
