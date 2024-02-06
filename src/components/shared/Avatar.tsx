"use client";

type AvatarProps = {
  userData: UserData;
};

type UserData = {
  id: number;
  email: string;
  firstname: string | null;
  lastname: string | null;
  created: string;
  updated: string;
};

const Avatar = ({ userData }: AvatarProps) => {
  return (
    <div className="text-neutral-content rounded-full w-10 bg-slate-500">
      <span className="text-xs">{userData.email.slice(0, 2).toLocaleUpperCase()}</span>
    </div>
  );
};

export default Avatar;
