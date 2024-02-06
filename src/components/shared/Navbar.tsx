import Link from "next/link";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b h-20 sm:h-24 p-5 transition-all ease-in-out duration-300">
      <div className="flex-1">
        <Link href={"/home"} className="text-xl font-bold text-slate-700">
          Todo's
        </Link>
      </div>
      <UserMenu />
    </div>
  );
};

export default Navbar;
