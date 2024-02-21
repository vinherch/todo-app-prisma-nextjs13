import ControlTodos from "./ControlTodos";
import TodoList from "./TodoList";

type Todos = {
  id: number;
  userId: number;
  title: string;
  description: string;
  checked: boolean;
  created: string;
  updated: string;
};

type TodosProps = {
  userId: number;
  sort: string;
  todos: Todos[];
};

const Todos = async ({ userId, sort, todos }: TodosProps) => {
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
