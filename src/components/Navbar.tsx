import { FiSearch } from "react-icons/fi";

export default function Navbar(){
    return (
        <div className="py-[20px] md:px-[40px] px-[20px] bg-[#795ebc] flex flex-row justify-between items-center">
            <h1 className="md:text-[32px] text-[24px] font-semibold text-white cursor-pointer">
                Manga18
            </h1>
            <FiSearch className="md:w-[32px] md:h-[32px] w-[24px] h-[24px] text-white cursor-pointer" />
        </div>
    )
}