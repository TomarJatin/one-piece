import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  open: boolean;
  setOpen: any;
  children: ReactNode
}

export default function Modal({ open, setOpen, children }: ModalProps) {
    const ref: any = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
          if (ref.current && ref.current.contains(event.target)) {
            // Handle click inside logic here
          } else {
            setOpen(false)
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
    <div className="w-screen h-screen fixed flex flex-col items-center">
      <div className="w-screen h-screen fixed top-0 bg-black opacity-50" />
      <div className="z-20" ref={ref}>
        <div className="w-[400px] h-[400px] bg-white top-0">

        </div>
      {children}
      </div>
    </div>
  ) : null;
}
