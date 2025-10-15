interface IHeader1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string; // required prop
}

export function Header1({ title, className, ...props }: IHeader1Props) {
  return (
    <h1
      className={`text-center font-[700] text-2xl md:text-[48px] leading-[50px] text-[rgba(76,206,238,1)] font-[Sofia_Sans] tracking-[0%] ${
        className ?? ""
      }`}
      {...props}
    >
      {title}
    </h1>
  );
}
