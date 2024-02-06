"use client";

type AvatarProps = {
  userData?: {};
};

const Avatar = ({ userData }: AvatarProps) => {
  return (
    <div className="text-neutral-content rounded-full w-10 bg-slate-500">
      <span className="text-xs">AA</span>
    </div>
  );
};

export default Avatar;
