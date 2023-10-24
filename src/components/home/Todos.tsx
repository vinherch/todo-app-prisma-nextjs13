import ControlTodos from "./ControlTodos";
import TodoList from "./TodoList";

type TodosProps = {
  userId: number;
  sort: string;
};

type Todos = { id: number; userId: number; title: string; description: string; checked: boolean; created: Date; updated: Date }[];

const getTodos = async () => {
  const response = await fetch(`${process.env.HOST_DEV}/api/v1.0/todos`, {
    cache: "no-store",
  });
  return await response.json();
};

const Todos = async ({ userId, sort }: TodosProps) => {
  const todos = await getTodos();
  return (
    <div>
      <ControlTodos />
      <div className="mt-3 border-t border-t-gray-300 ">
        <TodoList todos={todos} sort={sort} />
      </div>
    </div>
  );
};

export default Todos;
