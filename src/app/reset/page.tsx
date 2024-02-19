import PasswordResetForm from "@/components/PasswordResetForm";
import Image from "next/image";

const PasswordReset = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-5 gap-3 m-auto xl:flex-row">
      <div className="mb-5 xl:mb-0">
        <Image src={"/reset.svg"} alt="Illustration reset password" priority={true} height={430} width={430} />
        <div className="mt-10 text-center">
          <p className="text-2xl">Password Reset</p>
          <p>We will send you a link to reset your password.</p>
        </div>
      </div>
      <div className="w-96">
        <PasswordResetForm />
      </div>
    </div>
  );
};

export default PasswordReset;
