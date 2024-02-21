import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import SearchTodo from "@/components/home/SearchTodo";
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

const Home = async ({ searchParams: { sort } }) => {
  const { id, email, firstname, lastname, created, updated, todos }: UserData = await getUserData();

  return (
    <div className="hero min-h-screen p-5">
      <div className="w-full xl:w-4/5 2xl:w-3/4">
        <div className="w-full flex gap-3 flex-col xl:flex-row mb-20">
          <SearchTodo />
          <div className="w-full lg:w-auto">
            <Link href={"/new"} className="btn btn-primary text-white pl-5 pr-5 w-full">
              New
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <Todos userId={id} sort={sort} todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default Home;
