interface IAppButtonLinkProps {
  title: string;
  className?: string;
}

export default function AppButton({
  title,
  className = "",
}: IAppButtonLinkProps) {
  return (
    <button
      className={`p-[6px] px-4 rounded-full flex justify-center cursor-pointer items-center text-[18px] border border-[#FFFFFF] ${className}`}
    >
      {title}
    </button>
  );
}
