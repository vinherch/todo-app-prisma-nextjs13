"use client";

import { useRouter } from "next/navigation";

type DeleteTodoBtnProps = {
  todoId: number;
};

const DeleteTodoBtn = async ({ todoId }: DeleteTodoBtnProps) => {
  const router = useRouter();
  const deleteTodo = async (todoId: number) => {
    const result: Promise<Response> = await fetch(`/api/v1.0/todos/${todoId}`, {
      method: "DELETE",
    });
    router.refresh();
  };

  return (
    <button className="btn btn-warning btn-sm" onClick={() => deleteTodo(todoId)}>
      Delete
    </button>
  );
};

export default DeleteTodoBtn;
