import { useContext } from "react";
import { Link } from "react-router-dom";
import Todo from "./Todo";
import SortTodos from "./SortTodos";
import FilterTodos from "./FilterTodos";
import TodoContext from "../../../context/TodoContext";

const Todos = () => {
  const { todos, searchTodo } = useContext(TodoContext);
  return (
    <div>
      <SortTodos />
      <FilterTodos />
      <Link to={"/new"}>NEW</Link>
      <ul>
        {todos.length > 0 &&
          todos
            .filter((e) => {
              return e.title.toLowerCase().includes(searchTodo) || e.description.toLowerCase().includes(searchTodo);
            })
            .map(({ id, title, description, tags, created, dueDate, isChecked }) => (
              <li key={id}>
                <Todo id={id} title={title} description={description} tags={tags} created={created} dueDate={dueDate} isChecked={isChecked} />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Todos;
