import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { validateTodo } from "@/utils/formValidation";

const createNewTodo = async (formData: FormData) => {
  "use server";

  //Get form data
  const title = formData.get("title") || "";
  const description = formData.get("description") || "";

  //Validate form data
  const validated = validateTodo({ title, description });
  if (validated.success) {
    try {
      const prisma = new PrismaClient();
      const result = await prisma.todo.create({
        data: {
          userId: 1,
          title: validated.data.title,
          description: validated.data.description,
          checked: false,
        },
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
};

const NewTodo = () => {
  return (
    <div className="flex min-h-screen justify-center items-center flex-col p-5 gap-3">
      <div className="mb-24">
        <Image src={"/newTodo.svg"} alt="Illustration new Todo" height={600} width={600} />
      </div>
      <form className="flex flex-col gap-3 w-full lg:w-1/2" action={createNewTodo}>
        <div className="form-control">
          <input type="text" placeholder="Title" id="title" name="title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <textarea className="textarea textarea-bordered h-32" id="description" name="description" placeholder="Description"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
