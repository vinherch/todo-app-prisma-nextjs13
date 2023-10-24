"use client";

import { useContext, useState } from "react";
import TodoContext from "@/context/TodoContext";
import DeleteTodoBtn from "./DeleteTodoBtn";
import TodoTag from "./TodoTag";

type TodoProps = {
  id: number;
  userId: number;
  title: string;
  description: string;
  checked: boolean;
  created: string;
  updated: string;
};

//TODO
//checked toogle

const Todo = ({ id, userId, title, description, checked, created, updated }: TodoProps) => {
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
            <label htmlFor={`completed-${id}`} className="text-sm">
              Completed
            </label>
            <input type="checkbox" checked={checked} id={`completed-${id}`} className="checkbox" onChange={() => setIsChecked(!isChecked)} />
          </div>
          <DeleteTodoBtn todoId={id} />
        </div>
        <div className="flex w-full">
          <div className="flex flex-1">
            <p className="text-sm">Assigned Tag's</p>
            {/* {todoTags.map((e) => e.id === id && e.tags.map((t) => <TodoTag key={t} value={t} />))} */}
          </div>
          <div className="text-xs">
            <div className="flex justify-end items-end gap-1">
              <p>Created: </p>
              <span>{created}</span>
            </div>
            <div className="flex justify-end items-end gap-1">
              <p>Updated: </p>
              <span>{updated}</span>
            </div>
            {/* <div className="flex justify-end gap-1">
              <p>Due Date: </p>
              {/* <span>{getDateTime(dueDate)}</span> 
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
