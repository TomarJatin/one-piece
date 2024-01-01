import { DataContext } from "@/contexts/DataContext";
import { DataContextType } from "@/types";
import Link from "next/link";
import { useContext } from "react";

export default function Footer() {
    const { theme } = useContext(DataContext) as DataContextType;

    return (
        <div className={`${theme === "dark" ? "bg-dark border-[#fff]" : "bg-light border-[#000]"} border-t-2 md:py-[40px] py-[20px] md:px-[40px] px-[20px] flex flex-row md:gap-4 gap-2 items-center`}>
            <Link href="/dmca" className={`${theme === "dark" ? "text-white": "text-black"} md:text-[16px] text-[12px]`} >DMCA</Link>
            <p className={`${theme === "dark" ? "text-white": "text-black"}`}>|</p>
            <Link href="/privacy-policy" className={`${theme === "dark" ? "text-white": "text-black"} md:text-[16px] text-[12px]`} >Privacy Policy</Link>
            <p className={`${theme === "dark" ? "text-white": "text-black"} `}>|</p>
            <Link href="/terms-and-conditions" className={`${theme === "dark" ? "text-white": "text-black"} md:text-[16px] text-[12px]`} >Terms and Conditions</Link>
        </div>
    )
}