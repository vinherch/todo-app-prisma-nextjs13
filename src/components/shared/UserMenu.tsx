import Link from "next/link";
import Avatar from "./Avatar";
import Logout from "../home/Logout";
import { getLoggedInUser } from "@/actions/actions";

const UserMenu = async () => {
  const user = await getLoggedInUser();
  return (
    <div className="flex-none gap-2 border">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="avatar placeholder">
          <Avatar userData={user} />
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
