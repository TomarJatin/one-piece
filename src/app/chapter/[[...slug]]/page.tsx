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
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const { theme, chapters, setSelectedChapter, loading } = useContext(
    DataContext
  ) as DataContextType;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  if(!params.slug){
    router.push("/chapter/1")
    return null;
  }
  const chapterSlug = params.slug[0];
  const selectedChapter = chapters.findIndex((item: any) => item.title.match(/Chapter (\d+(\.\d+)?)/)[1] === chapterSlug);



  return (
    <div className={`${theme === "dark" ? "bg-dark" : "bg-light"} min-h-screen`}>
      {
        !loading ? (
          <div className="w-full md:px-[40px] px-[20px] pb-[40px]">
        {/* TopBar */}
        <div>
          <p
            className={`text-center font-semibold md:text-[32px] text-[24px] pt-[40px] ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {selectedChapter !== -1 && chapters.length > 0 && chapters[selectedChapter].title}{" "}
          </p>
          <div className="flex flex-row justify-between items-center md:py-[40px] py-[20px]">
            <button
              onClick={() => setOpen(true)}
              className="py-[6px] md:p-[10px] px-[8px] bg-[#795ebc] flex flex-row gap-4 items-center rounded-[6px] border-0 outline-none"
            >
              <IoReorderThreeOutline className="md:w-[24px] w-[24px] h-[24px] md:h-[24px] text-white" />
              <p className="text-white font-medium text-[14px] hidden md:inline">
                Chapter Selector
              </p>
            </button>

            <div className="flex flex-row gap-4 items-center">
              {selectedChapter > 0 && (
                <button
                  onClick={() => {
                    if (selectedChapter > 0) {
                      router.push("/chapter/"+ chapters[selectedChapter-1].title.match(/Chapter (\d+(\.\d+)?)/)[1]);
                    }
                  }}
                  className="p-[10px] bg-[#795ebc] flex flex-row gap-4 items-center rounded-[6px]"
                >
                  <IoChevronBackOutline className="md:w-[24px] w-[16px] md:h-[24px] h-[16px] text-white" />
                  <p className="text-white font-medium text-[14px] hidden md:inline">
                    Previous Chapter
                  </p>
                </button>
              )}
              {selectedChapter < chapters.length - 1 && (
                <button
                  onClick={() => {
                    if (selectedChapter < chapters.length - 1) {
                      
                      router.push("/chapter/"+ chapters[selectedChapter+1].title.match(/Chapter (\d+(\.\d+)?)/)[1]);
                    }
                  }}
                  className="p-[10px] bg-[rgb(121,94,188)] flex flex-row gap-4 items-center rounded-[6px]"
                >
                  <p className="text-white font-medium text-[14px] hidden md:inline">
                    Next Chapter
                  </p>
                  <IoChevronForwardSharp className="md:w-[24px] w-[16px] md:h-[24px] h-[16px] text-white" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div className={`flex flex-col items-center justify-center gap-2  ${theme === "dark" ? "card-dark": "card-light2"}`}>
          {selectedChapter !== -1 && chapters.length > 0 &&
            chapters[selectedChapter].images.map((item, index) => (
              <div key={index} className={`max-w-[990px] w-full`}>
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
        ): (
          <div className="w-full flex flex-col items-center">
            <Image
                  className=" object-contain"
                  width={250}
                  height={250}
                  alt="one piece chapter"
                  src={"/luffy-bounce.gif"}
                  objectFit="contain"
                />
          </div>
        )
      }
      <Modal open={open} setOpen={setOpen}>
        <div
          className={`z-40 ${
            theme === "dark" ? "bg-[#0f0f0f]" : "bg-light"
          }  md:w-[60%] w-full top-[20%] h-[60%] overflow-y-scroll fixed  px-[20px] py-[25px] rounded-[20px] flex flex-col gap-[20px] items-center `}
        >
          <h3
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-center font-semibold text-[24px]`}
          >
            Select Chapter
          </h3>
          <div className="w-full grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-4">
            {chapters.map((item: any, index) => (
              <div
                key={index}
                className={`${
                  theme === "dark" ? "bg-[#212229]" : "bg-[#fff]"
                } md:w-[120px] w-[100px] py-[10px] cursor-pointer`}
                onClick={() => {
                  router.push("/chapter/"+ chapters[chapters.length - index-1].title.match(/Chapter (\d+(\.\d+)?)/)[1])
                  setOpen(false)
                }}
              >
                <p
                  className={`text-center font-medium text-[14px] ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {chapters[chapters.length - index-1].title.match(/Chapter (\d+(\.\d+)?)/)[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
