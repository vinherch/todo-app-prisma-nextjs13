import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b h-20 sm:h-24 p-5 transition-all ease-in-out duration-300">
      <div className="flex-1">
        <Link href={"/home"} className="text-xl font-bold text-slate-700">
          Todo's
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="avatar placeholder">
            <div className="text-neutral-content rounded-full w-10 bg-slate-500">
              <span className="text-xs">AA</span>
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
            <li>
              <Link href={"/"}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
