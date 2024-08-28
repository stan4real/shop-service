import { ReactElement, useState } from "react";
import { twMerge } from "tailwind-merge";
type ModalProps = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  className?:string,
  icon?:string,
  children: ReactElement;
};
function Modal({setActive, text, children, className,icon }: ModalProps) {
  const [onClose, setOnClose] = useState(false)
  const closeModal = () => {
    setOnClose(true)
    setTimeout(()=>setActive(false), 300);
  };
  return (
    <div
      onClick={closeModal}
      className={twMerge("fixed bottom-0  left-0 z-10 h-screen w-screen overflow-hidden bg-black/50 transition-transform",
        onClose ? "animate-[fadeOut_0.3s_ease-out] opacity-0": "animate-[fadeIn_0.3s_ease-out]"
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={twMerge(
          "absolute bottom-0 flex h-1/2 w-full flex-col items-start justify-between gap-2 rounded-t-[20px] bg-white px-4 pt-4 text-center",
          onClose ? "animate-[slideOut_0.3s_ease-out] translate-y-1/2" : "animate-[slideIn_0.3s_ease-out] translate-y-0" ,
          className ? `${className}`:""
        )}
      >
        <div className="">
            <div className="flex justify-start items-center gap-4 pl-[1px]">
              {icon && <i className={icon}></i> }
              <h1 className="text-2xl ">{text}</h1>
            </div>
          <i
            onClick={closeModal}
            className="fa-solid fa-x fa-lg absolute right-5 top-7"
          ></i>
        </div>
        <div className="w-full overflow-scroll flex flex-col gap-2">
            {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
