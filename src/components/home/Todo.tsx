"use client";

import { useContext, useState } from "react";
import TodoContext from "@/context/TodoContext";
import DeleteTodoBtn from "./DeleteTodoBtn";
import TodoTag from "./TodoTag";
import { getDateTime } from "@/utils/dataTimeHelper";

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
    <div className="card w-full h-96 bg-neutral text-neutral-content shadow-lg shadow-gray-500 md:hover:scale-105 transition-all duration-20">
      <div className="card-body items-center">
        <h2 style={{ textDecoration: isChecked ? "line-through" : "" }} className="card-title">
          {title}
        </h2>
        <div className="flex flex-col h-full w-full gap-2 p-2">
          <div className=" flex-1 border border-gray-600 p-1">
            <div style={{ textDecoration: isChecked ? "line-through" : "" }} className="text-sm w-full overflow-auto ">
              {description}
            </div>
          </div>
          <div className="card-actions w-full p-1">
            <div className="flex-1 h-full">
              <input type="checkbox" checked={checked} id={`completed-${id}`} onChange={() => setIsChecked(!isChecked)} />
              <label htmlFor={`completed-${id}`} className="text-xs ml-2">
                Completed
              </label>
            </div>
            <div>
              <DeleteTodoBtn todoId={id} />
            </div>
          </div>
          <div className="flex w-full p-1">
            <div className="flex flex-1">
              <p className="text-xs">Tags: </p>
              {/* {todoTags.map((e) => e.id === id && e.tags.map((t) => <TodoTag key={t} value={t} />))} */}
            </div>
          </div>
          <div className="text-xs text-gray-400 p-1">
            <div className="flex gap-1">
              <p>Created: </p>
              <span>{getDateTime(created)}</span>
            </div>
            <div className="flex gap-1">
              <p>Updated: </p>
              <span>{getDateTime(updated)}</span>
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
