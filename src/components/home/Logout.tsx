"use client";

import { deleteCookie } from "@/actions/actions";

const logout = async () => {
  await deleteCookie("auth-token");
};

const Logout = () => {
  return <button onClick={async () => await logout()}>Logout</button>;
};

export default Logout;
