import { FiSearch } from "react-icons/fi";

interface NavbarProps{
    showSearch: boolean;
    setShowSearch: any;
    searchText: string;
    setSearchText: any;
    handleSearch: () => void
}

export default function Navbar({showSearch, setSearchText, searchText, setShowSearch, handleSearch}: NavbarProps) {
  return (
    <>
    {
        showSearch && (
            <div className="p-[20px] flex flex-col items-center">
                <div className="flex flex-row items-center gap-2 border-[1px] p-[10px] md:w-[50%] w-[100%]">
                    <input className="w-[100%] border-none outline-none" value={searchText} placeholder="Search here" onChange={(e) => setSearchText(e.target.value)} />
                    <div onClick={handleSearch}>
                    <FiSearch className=" w-[24px] h-[24px] text-black cursor-pointer" />
                    </div>
                </div>
            </div>
        )
    }
    <div className="py-[20px] md:px-[40px] px-[20px] bg-[#795ebc] flex flex-row justify-between items-center">
      <h1 className="md:text-[32px] text-[24px] font-semibold text-white cursor-pointer">
        Manga18
      </h1>
      <div onClick={() => setShowSearch((prev: boolean) => !prev)}>
      <FiSearch className="md:w-[32px] md:h-[32px] w-[24px] h-[24px] text-white cursor-pointer" />
      </div>
    </div></>
  );
}
