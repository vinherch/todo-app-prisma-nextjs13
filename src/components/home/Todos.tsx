import TodoList from "./TodoList";
import SortTodos from "./SortTodos";
import FilterTodos from "./FilterTodos";
import TodoSearch from "./TodoSearch";
import Link from "next/link";

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
  search: string;
  todos: Todos[];
};

const Todos = async ({ userId, sort, todos, search }: TodosProps) => {
  return (
    <>
      <div className="w-full flex gap-3 flex-col lg:flex-row mb-20">
        <Link href={"/new"} className="btn btn-primary text-white pl-7 pr-7">
          New
        </Link>
        <TodoSearch />
      </div>
      <div className="flex gap-3 flex-col lg:flex-row">
        <SortTodos />
        <FilterTodos />
      </div>
      <div className="mt-3 border-t border-t-gray-300 ">
        <TodoList todos={todos} sort={sort} search={search} />
      </div>
    </>
  );
};

export default Todos;
