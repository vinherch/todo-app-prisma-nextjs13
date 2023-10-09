"use client";

import { useContext, useState } from "react";
import TodoContext from "@/context/TodoContext";
import { getDateTime } from "@/utils/dataTimeHelper";
import TodoTag from "./TodoTag";

const Todo = ({ id, title, description, created, dueDate }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { deleteTodo, todoTags } = useContext(TodoContext);
  return (
    <div className="card w-full h-96 bg-neutral text-neutral-content shadow-lg shadow-gray-500 md:hover:scale-105 transition-all duration-200">
      <div className="card-body items-center">
        <h2 style={{ textDecoration: isChecked ? "line-through" : "" }} className="card-title">
          {title}
        </h2>
        <p style={{ textDecoration: isChecked ? "line-through" : "" }} className="text-sm w-full overflow-auto">
          {description}
        </p>
        <div className="card-actions w-full justify-end items-end">
          <div className="flex justify-center gap-2">
            <label htmlFor="completed" className="text-sm">
              Completed
            </label>
            <input type="checkbox" checked={isChecked} id="completed" className="checkbox" onChange={() => setIsChecked(!isChecked)} />
          </div>
          <button className="btn btn-warning btn-sm" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </div>
        <div className="flex w-full">
          <div className="flex flex-1">
            <p className="text-sm">Assigned Tag's</p>
            {/* {todoTags.map((e) => e.id === id && e.tags.map((t) => <TodoTag key={t} value={t} />))} */}
          </div>
          <div className="text-xs">
            <div className="flex justify-end items-end gap-1">
              <p>Created: </p>
              <span>{getDateTime(created)}</span>
            </div>
            <div className="flex justify-end gap-1">
              <p>Due Date: </p>
              <span>{getDateTime(dueDate)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
