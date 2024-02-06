import Avatar from "../shared/Avatar";
import Logout from "./Logout";

const UserMenu = () => {
  return (
    <div className="flex-none gap-2 border">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="avatar placeholder">
          <Avatar />
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
