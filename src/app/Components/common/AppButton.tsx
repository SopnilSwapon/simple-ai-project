import React from "react";
interface IAppButtonLinkProps {
  title: string | React.ReactNode;
  className?: string;
}

export default function AppButton({
  title,
  className = "",
}: IAppButtonLinkProps) {
  return (
    <button
      className={`p-[6px] lg:px-6 px-4 rounded-full flex justify-center cursor-pointer items-center text-[18px] border border-[#FFFFFF] ${className}`}
    >
      {title}
    </button>
  );
}
