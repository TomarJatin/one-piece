import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  open: boolean;
  setOpen: any;
  children: ReactNode;
}

export default function Modal({ open, setOpen, children }: ModalProps) {
  const ref: any = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && ref.current.contains(event.target)) {
        // Handle click inside logic here
      } else {
        setOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return open ? (
    <div className="  w-full">
      <div className="w-full h-[100vh] fixed bg-black  top-0 opacity-20" />
      <div
        ref={ref}
        className="w-full flex flex-col items-center justify-center"
      >
        {children}
      </div>
    </div>
  ) : null;
}
