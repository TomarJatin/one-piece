"use client";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { FaBolt } from "react-icons/fa6";
import Modal from "@/components/Modal";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "@/contexts/DataContext";
import { DataContextType } from "@/types";
import { useRouter } from "next/navigation";

interface Chapter {
  title: string;
  images: string[];
  // Add other fields as needed
}

export default function Home() {
  const { theme, chapters, setSelectedChapter } = useContext(
    DataContext
  ) as DataContextType;
  const router = useRouter();

  function MangaCard() {
    return (
      <div className="w-[168px] h-[250px] rounded-[10px] card cursor-pointer">
        <Image
          className="w-full h-full rounded-[10px]"
          src={
            "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974709939/chainsaw-man-vol-1-9781974709939_hr.jpg"
          }
          width={168}
          height={250}
          objectFit="cover"
          alt="thumbnail"
        />
        <div className="bg-black p-[10px] mt-[-42px] z-10 glass">
          <p className="text-white text-[15px] font-semibold">One Piece #4</p>
        </div>
      </div>
    );
  }

  const slugify = (input: string) => {
    return input
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
  };

  function ChapterCard({ data }: { data: Chapter }) {
    return (
      <div
        onClick={() => {
          setSelectedChapter(data);
          router.push("/chapter/"+slugify(data.title));
        }}
        className="w-[168px] cursor-pointer"
      >
        <Image
          className="w-[168px] h-[250px] rounded-[10px]"
          src={
            "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974709939/chainsaw-man-vol-1-9781974709939_hr.jpg"
          }
          width={168}
          height={250}
          objectFit="cover"
          alt="thumbnail"
        />
        <div className="px-[4px]">
          <p
            className={`font-bold mt-[6px] ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            #{data.title}
          </p>
          <p
            className={`font-medium ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Chainsaw Man
          </p>
        </div>
      </div>
    );
  }

  return (
    <main
      className={` md:px-[40px] md:pb-[20px] md:pt-[40px] py-[20px] ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      {/* Best Chapters */}
      <div>
        <div className="flex flex-row items-center md:gap-[20px] gap-[10px] border-b-[1px]">
          <div className="md:p-[10px] p-[6px] bg-[#795ebc]">
            <IoStarSharp className="md:w-[20px] w-[16px] md:h-[20px] h-[16px] text-white" />
          </div>
          <p
            className={`font-semibold text-[18px] ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Best Chapters
          </p>
        </div>
        <div className="flex flex-row gap-4 py-[20px] flex-nowrap items-center overflow-x-auto overflow-y-hidden">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (item, index) => (
              <MangaCard key={index} />
            )
          )}
        </div>
      </div>

      {/* All Chapters */}
      <div className="mt-[40px]">
        <div className="flex flex-row items-center md:gap-[20px] gap-[10px] border-b-[1px]">
          <div className="md:p-[10px] p-[6px] bg-[#795ebc]">
            <FaBolt className="md:w-[20px] w-[16px] md:h-[20px] h-[16px] text-white" />
          </div>
          <p
            className={`font-semibold text-[18px] ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            All Chapters
          </p>
        </div>
        <div className="py-[20px] grid gap-4 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 ">
          {chapters.map((item, index) => (
            <ChapterCard key={index} data={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
