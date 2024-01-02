import { DataContext } from "@/contexts/DataContext";
import { chaptersData } from "@/lib/data";
import { Chapter, DataContextType } from "@/types";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";
import useDebounce from "@/lib/hooks/Debounce";

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
  const { theme, setTheme } = useContext(DataContext) as DataContextType;
  const debouncedSearch = useDebounce(searchText, 500);
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<Chapter[]>([]);
  const [showMore, setshowMore] = useState(false);
  const moreManga = [
    {
      title: "Jujutsu Kaisen",
      url: "https://read-jujutsu-kaisen.vercel.app/",
    },
    {
      title: "Chainsaw man",
      url: "https://read-chainsaw-man.vercel.app",
    },
    {
      title: "Blue Lock",
      url: "https://read-blue-lock.vercel.app/",
    },
    {
      title: "Boku no Hero Academia",
      url: "https://read-mha.vercel.app/",
    },
    {
      title: "Kagurabachi",
      url: "https://read-kagurabachi.vercel.app/",
    },
    {
      title: "Oshi no Ko",
      url: "https://read-oshinoko.vercel.app/",
    },
    {
      title: "Fire punch",
      url: "https://fire-punch.vercel.app/",
    },
    {
      title: "Demon Slayer",
      url: "https://read-demon-slayer.vercel.app"
    },
    {
      title: "Vinland Saga",
      url: "https://read-vinland-saga.vercel.app/"
    }
  ];
  const ref: any = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && ref.current.contains(event.target)) {
        // Handle click inside logic here
      } else {
        setshowMore(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const checkSuggestions = () => {
    const _chapters: Chapter[] = [];
    if (debouncedSearch !== "") {
      chaptersData.map((item: any) => {
        if (item.title.includes(debouncedSearch)) {
          if (_chapters.length < 5) {
            _chapters.push(item);
          }
        }
      });
      setSuggestions([..._chapters]);
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    checkSuggestions();
  }, [debouncedSearch]);

  return (
    <div className={`${theme === "dark" ? "bg-dark" : "bg-light"}`}>
      {showSearch && (
        <div className="p-[20px] flex flex-col items-center">
          <div className="flex flex-row items-center gap-2 border-[1px] p-[10px] md:w-[50%] w-[100%] bg-none">
            <input
              className={`w-[100%] border-none outline-none ${
                theme === "dark" ? "bg-dark text-white" : "bg-light text-black"
              }`}
              value={searchText}
              placeholder="Search here"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div onClick={handleSearch}>
              <FiSearch
                className={`w-[24px] h-[24px] cursor-pointer  ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              />
            </div>
          </div>
          <div className="pt-[20px] flex flex-col md:w-[50%] w-[100%]">
            {suggestions.map((item: any, index) => (
              <p
                onClick={() => {
                  const chapterTitle = parseInt(item.title.match(/Chapter (\d+)/)[1]);
                  router.push("/chapter/" + chapterTitle);
                }}
                key={index}
                className={`${
                  theme === "dark"
                    ? "text-white border-white"
                    : "text-black border-black"
                } border-b-[1px] p-[10px] cursor-pointer`}
              >
                {item.title}
              </p>
            ))}
          </div>
        </div>
      )}
      <div className="py-[20px] md:px-[40px] px-[20px] bg-[#795ebc] flex flex-row justify-between items-center ">
        <div className="flex flex-row items-center gap-8">
          <h1
            onClick={() => router.push("/")}
            className="md:text-[32px] text-[24px] font-semibold text-white cursor-pointer"
          >
            Read One Piece
          </h1>
          <div
            onClick={() => {
              if (!showMore) {
                setshowMore(true);
              }
            }}
            className=" py-[6px] px-[14px] border-2 hidden  border-white rounded-lg md:flex flex-row gap-2 items-center cursor-pointer"
          >
            <h3 className=" text-[18px] font-semibold text-white ">
              More Manga
            </h3>
            <FaCaretDown className="w-[16px] text-white " />
          </div>
        </div>
        <div className="flex flex-row items-center gap-[40px]">
          <div onClick={handleThemeChange}>
            <LuMoonStar className="md:w-[32px] md:h-[32px] w-[24px] h-[24px] text-white cursor-pointer" />
          </div>
          <div onClick={() => setShowSearch((prev: boolean) => !prev)}>
            <FiSearch className="md:w-[32px] md:h-[32px] w-[24px] h-[24px] text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="md:hidden pb-[20px]  md:px-[40px] px-[20px] bg-[#795ebc] flex flex-row justify-between items-center ">
        <div
          onClick={() => {
            if (!showMore) {
              setshowMore(true);
            }
          }}
          className=" py-[6px] px-[14px] border-2  border-white rounded-lg flex flex-row gap-2 items-center cursor-pointer"
        >
          <h3 className=" text-[18px] font-semibold text-white ">More Manga</h3>
          <FaCaretDown className="w-[16px] text-white " />
        </div>
      </div>
      {showMore && (
        <div
          ref={ref}
          className="absolute bg-[#795ebc] flex flex-col p-[20px] mt-[-10px]  md:ml-[300px] ml-[20px] rounded-md"
        >
          {moreManga.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className={`text-white font-semibold ${
                index + 1 < moreManga.length ? "border-b-2" : ""
              } p-[10px]`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
