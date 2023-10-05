import { useContext, useState } from "react";
import TodoContext from "../../../context/TodoContext";
import TodoTag from "./TodoTag";

const Todo = ({ id, title, description, created, dueDate }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { deleteTodo, todoTags } = useContext(TodoContext);
  return (
    <div>
      <div>
        <p>{id}</p>
        <h3 style={{ textDecoration: isChecked ? "line-through" : "" }}>{title}</h3>
        <p style={{ textDecoration: isChecked ? "line-through" : "" }}>{description}</p>
        <div>
          <div>
            <p>Created: </p>
            <span>{created}</span>
          </div>
          <div>
            <p>Due Date: </p>
            <span>{dueDate}</span>
          </div>
        </div>
        <div>
          <h3>Assigned Tag's</h3>
          {todoTags.map((e) => e.id === id && e.tags.map((t) => <TodoTag key={t} value={t} />))}
        </div>
      </div>
      <div>
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
