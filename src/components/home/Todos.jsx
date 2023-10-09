import ControlTodos from "./ControlTodos";
import TodoList from "./TodoList";
import { PrismaClient } from "@prisma/client";

const getTodos = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.todo.findMany({
    where: {
      userId: 1,
    },
  });
  return data;
};

const Todos = async () => {
  //const { todos, searchTodo } = useContext(TodoContext);
  const todos = await getTodos();
  return (
    <div>
      <ControlTodos />
      <div className="mt-3 border-t border-t-gray-300 ">
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default Todos;
