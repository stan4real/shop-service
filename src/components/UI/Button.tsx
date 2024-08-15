import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactElement;
  className?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit" | undefined;
};
function Button({ children, type, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={twMerge(
        "mt-6 flex w-full items-center justify-center rounded-2xl bg-white px-4 py-4 text-xl text-black shadow-md active:bg-zinc-300",
        className ? `${className}` : "",
      )}
    >
      {children}
    </button>
  );
}

export default Button;
