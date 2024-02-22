import type { Metadata } from "next";
import Todos from "@/components/home/Todos";
import { getLoggedInUser } from "@/actions/actions";

export const metadata: Metadata = {
  title: "Home - Manage your Todo's",
  description: "App to manage your Todo's",
};

type UserData = {
  id: number;
  email: string;
  firstname: string | null;
  lastname: string | null;
  created: string;
  updated: string;
  todos: UserTodos[];
};

type UserTodos = {
  id: number;
  userId: number;
  title: string;
  description: string;
  checked: boolean;
  created: string;
  updated: string;
};

const getUserData = async () => {
  //Get user
  const { id, email, firstname, lastname, created, updated } = await getLoggedInUser();
  //Get todos from user
  const responseTodos = await fetch(`${process.env.HOST_DEV}/api/v1.0/todos/?user=${id}`);
  const todos = await responseTodos.json();
  return { id, email, firstname, lastname, created, updated, todos };
};

const Home = async ({ searchParams: { sort, q } }) => {
  const { id, todos }: UserData = await getUserData();

  return (
    <div className="hero min-h-screen p-5">
      <div className="w-full xl:w-4/5 2xl:w-3/4">
        <div className="mt-5">
          <Todos userId={id} sort={sort} todos={todos} search={q} />
        </div>
      </div>
    </div>
  );
};

export default Home;
