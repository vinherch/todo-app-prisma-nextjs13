import type { Metadata } from "next";
import Link from "next/link";
import SearchTodo from "@/components/home/SearchTodo";
import Todos from "@/components/home/Todos";
import { TodoProvider } from "@/context/TodoContext";

export const metadata: Metadata = {
  title: "Home - Manage your Todo's",
  description: "App to manage your Todo's",
};

const Home = () => {
  return (
    <main className="hero min-h-screen p-5">
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
          <Todos />
        </div>
      </div>
    </main>
  );
};

export default Home;
