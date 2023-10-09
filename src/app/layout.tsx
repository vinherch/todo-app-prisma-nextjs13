import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import { TodoProvider } from "@/context/TodoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login - Create new Todo's",
  description: "App to manage your Todo's",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TodoProvider>
          <Navbar />
          <main className="bg-base-100 min-h-screen">{children}</main>
        </TodoProvider>
      </body>
    </html>
  );
}
