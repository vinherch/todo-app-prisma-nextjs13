"use client";

import { useContext } from "react";
import TodoContext from "@/context/TodoContext";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  const { searchTodo } = useContext(TodoContext);
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5">
        {todos.length === 0 ? (
          <p className="text-center pt-2 pb-2">No Todo's yet.</p>
        ) : (
          todos
            .filter((e) => {
              return e.title.toLowerCase().includes(searchTodo) || e.description.toLowerCase().includes(searchTodo);
            })
            .map(({ id, title, description, tags, created, dueDate, isChecked }) => (
              <li key={id}>
                <Todo id={id} title={title} description={description} tags={tags} created={created} dueDate={dueDate} isChecked={isChecked} />
              </li>
            ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
