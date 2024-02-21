import CreateTodoForm from "@/components/CreateTodoForm";
import Image from "next/image";

const NewTodo = () => {
  return (
    <div className="flex min-h-screen justify-center items-center flex-col p-5 gap-3">
      <div className="mb-24">
        <Image src={"/newTodo.svg"} alt="Illustration new Todo" priority={true} height={600} width={600} />
      </div>
      <CreateTodoForm />
    </div>
  );
};

export default NewTodo;
