import Avatar from "./Avatar";
import Logout from "../home/Logout";
import { cookies } from "next/headers";
import { verifyJWT } from "@/utils/jwtHelper";

const getUserDetails = async () => {
  const jwt = cookies().get("auth-token");
  const { id } = await verifyJWT(jwt!.value);
  const response = await fetch(`${process.env.HOST_DEV}/api/v1.0/users/${id}`);
  return await response.json();
};

const UserMenu = async () => {
  const userData = await getUserDetails();
  return (
    <div className="flex-none gap-2 border">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="avatar placeholder">
          <Avatar userData={userData} />
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
