import ControlTodos from "./ControlTodos";
import TodoList from "./TodoList";
import { PrismaClient } from "@prisma/client";

type TodosProps = {
  userId: number;
  sort: string;
};

type Todos = { id: number; userId: number; title: string; description: string; checked: boolean; created: Date; updated: Date }[];

const getTodos = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.todo.findMany({
    where: {
      userId: 1,
    },
  });
  return data;
};

const Todos = async ({ userId, sort }: TodosProps) => {
  const data = await getTodos();
  return (
    <div>
      <ControlTodos />
      <div className="mt-3 border-t border-t-gray-300 ">
        <TodoList todos={data} sort={sort} />
      </div>
    </div>
  );
};

export default Todos;
