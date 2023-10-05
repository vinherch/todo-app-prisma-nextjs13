import { useContext } from "react";
import TodoContext from "../../../context/TodoContext";

const SearchTodo = () => {
  const { searchTodo, setSearchTodo } = useContext(TodoContext);

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setSearchTodo(e.target.value)} value={searchTodo} placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchTodo;
