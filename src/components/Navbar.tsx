import { ThemeContext } from "@/contexts/Theme";
import { ThemeContextType } from "@/types";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";

interface NavbarProps {
  showSearch: boolean;
  setShowSearch: any;
  searchText: string;
  setSearchText: any;
  handleSearch: () => void;
}

export default function Navbar({
  showSearch,
  setSearchText,
  searchText,
  setShowSearch,
  handleSearch,
}: NavbarProps) {
  const {theme, setTheme} = useContext(ThemeContext) as ThemeContextType;
  const router = useRouter();

const handleThemeChange = () => {
  if(theme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}

  return (
    <div className={`${theme === "dark"? "bg-black": "bg-white"}`}>
      {showSearch && (
        <div className="p-[20px] flex flex-col items-center">
          <div className="flex flex-row items-center gap-2 border-[1px] p-[10px] md:w-[50%] w-[100%] bg-none">
            <input
              className={`w-[100%] border-none outline-none ${theme === "dark"? "bg-black": "bg-white"}`}
              value={searchText}
              placeholder="Search here"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div onClick={handleSearch}>
              <FiSearch className={`w-[24px] h-[24px] cursor-pointer  ${theme === "dark"? "text-white": "text-black"}`} />
            </div>
          </div>
        </div>
      )}
      <div className="py-[20px] md:px-[40px] px-[20px] bg-[#795ebc] flex flex-row justify-between items-center">
        <h1 onClick={() => router.push("/")} className="md:text-[32px] text-[24px] font-semibold text-white cursor-pointer">
          Manga18
        </h1>
        <div className="flex flex-row items-center gap-[40px]">
        <div onClick={handleThemeChange}>
          <LuMoonStar className="md:w-[32px] md:h-[32px] w-[24px] h-[24px] text-white cursor-pointer" />
        </div>
        <div onClick={() => setShowSearch((prev: boolean) => !prev)}>
          <FiSearch className="md:w-[32px] md:h-[32px] w-[24px] h-[24px] text-white cursor-pointer" />
        </div>
        </div>
      </div>
    </div>
  );
}
