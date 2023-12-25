"use client";
import {
  IoReorderThreeOutline,
  IoChevronBackOutline,
  IoChevronForwardSharp,
} from "react-icons/io5";
import Image from "next/image";
import { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";
import { DataContextType } from "@/types";

export default function Page({ params }: { params: { slug: string } }) {
    const { theme, selectedChapter } = useContext(DataContext) as DataContextType;

  return (
    <div className={`${theme === "dark"? "bg-black": "bg-white"}`}>
      <div className="w-full md:px-[40px] px-[20px]">
        {/* TopBar */}
        <div>
          <p className={`text-center font-semibold text-[32px] p-[20px] ${theme === "dark"? "text-white": "text-black"}`}>
            {selectedChapter?.title}{" "}
          </p>
          <div className="flex flex-row justify-between items-center py-[40px]">
            <button className="p-[10px] bg-[#795ebc] flex flex-row gap-4 items-center rounded-[6px] border-0 outline-none">
              <IoReorderThreeOutline className="w-[24px] h-[24px] text-white" />
              <p className="text-white font-medium text-[14px]">
                Chapter Selector
              </p>
            </button>

            <div className="flex flex-row gap-4 items-center">
              <button className="p-[10px] bg-[#795ebc] flex flex-row gap-4 items-center rounded-[6px]">
                <IoChevronBackOutline className="w-[24px] h-[24px] text-white" />
                <p className="text-white font-medium text-[14px]">
                  Previous Chapter
                </p>
              </button>
              <button className="p-[10px] bg-[#795ebc] flex flex-row gap-4 items-center rounded-[6px]">
                <p className="text-white font-medium text-[14px]">
                  Next Chapter
                </p>
                <IoChevronForwardSharp className="w-[24px] h-[24px] text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div className="flex flex-col items-center justify-center gap-2 pb-[40px]">
          {selectedChapter && selectedChapter.images.map(
            (item, index) => (
              <div key={index} className="w-[70%]">
                <Image
                  key={index}
                  className="w-full object-contain"
                  width={500}
                  height={600}
                  alt="one piece chapter"
                  src={item}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
