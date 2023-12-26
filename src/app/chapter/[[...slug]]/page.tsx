"use client";
import {
  IoReorderThreeOutline,
  IoChevronBackOutline,
  IoChevronForwardSharp,
} from "react-icons/io5";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/contexts/DataContext";
import { DataContextType } from "@/types";
import Modal from "@/components/Modal";

export default function Page({ params }: { params: { slug: string } }) {
  const { theme, selectedChapter, chapters, setSelectedChapter } = useContext(
    DataContext
  ) as DataContextType;
  const [open, setOpen] = useState(false);

  const getDemoArray = () => {
    let demoarr = [];
    return Array.from({ length: chapters.length })
  }


  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <div className="w-full md:px-[40px] px-[20px]">
        {/* TopBar */}
        <div>
          <p
            className={`text-center font-semibold text-[32px] p-[20px] ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {selectedChapter !== -1 && chapters[selectedChapter].title}{" "}
          </p>
          <div className="flex flex-row justify-between items-center py-[40px]">
            <button
              onClick={() => setOpen(true)}
              className="p-[10px] bg-[#795ebc] flex flex-row gap-4 items-center rounded-[6px] border-0 outline-none"
            >
              <IoReorderThreeOutline className="w-[24px] h-[24px] text-white" />
              <p className="text-white font-medium text-[14px]">
                Chapter Selector
              </p>
            </button>

            <div className="flex flex-row gap-4 items-center">
              {selectedChapter > 0 && (
                <button
                  onClick={() => {
                    if (selectedChapter > 0) {
                      setSelectedChapter((prev: number) => prev - 1);
                    }
                  }}
                  className="p-[10px] bg-[#795ebc] flex flex-row gap-4 items-center rounded-[6px]"
                >
                  <IoChevronBackOutline className="w-[24px] h-[24px] text-white" />
                  <p className="text-white font-medium text-[14px]">
                    Previous Chapter
                  </p>
                </button>
              )}
              {selectedChapter < chapters.length - 1 && (
                <button
                  onClick={() => {
                    if (selectedChapter < chapters.length - 1) {
                      setSelectedChapter((prev: number) => prev + 1);
                    }
                  }}
                  className="p-[10px] bg-[#795ebc] flex flex-row gap-4 items-center rounded-[6px]"
                >
                  <p className="text-white font-medium text-[14px]">
                    Next Chapter
                  </p>
                  <IoChevronForwardSharp className="w-[24px] h-[24px] text-white" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div className="flex flex-col items-center justify-center gap-2 pb-[40px]">
          {selectedChapter !== -1 &&
            chapters[selectedChapter].images.map((item, index) => (
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
            ))}
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <div
          className={`z-40 ${
            theme === "dark" ? "bg-[#0f0f0f]" : "bg-white"
          }  w-[60%] top-[20%] h-[60%] overflow-y-scroll fixed  px-[20px] py-[25px] rounded-[20px] flex flex-col gap-[20px] items-center `}
        >
          <h3
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-center font-semibold text-[24px]`}
          >
            Select Chapter
          </h3>
          <div className="w-full grid grid-cols-6 gap-4">
            {getDemoArray().map((item, index) => (
              <div
                key={index}
                className={`${
                  theme === "dark" ? "bg-[#212229]" : "bg-[#c0bebe]"
                } w-[150px] py-[10px] cursor-pointer`}
                onClick={() => {
                  setSelectedChapter(chapters.length - index-1);
                  setOpen(false)
                }}
              >
                <p
                  className={`text-center font-medium text-[14px] ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {chapters.length - index}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
