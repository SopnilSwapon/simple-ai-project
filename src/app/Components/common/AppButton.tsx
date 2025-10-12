import Link from "next/link";

interface IAppButtonLinkProps {
  title: string;
  className?: string;
}

export default function AppButton({
  title,
  className = "",
}: IAppButtonLinkProps) {
  return (
    <Link
      href="/#"
      className={`p-[6px] px-4 rounded-full flex justify-center items-center text-[18px] border border-[#FFFFFF] ${className}`}
    >
      {title}
    </Link>
  );
}