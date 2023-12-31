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
  const { theme, chapters, setSelectedChapter, loading } = useContext(
    DataContext
  ) as DataContextType;
  const router = useRouter();

  const slugify = (input: string) => {
    return input
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  function ChapterCard({ data, index }: { data: Chapter; index: number }) {
    return (
      <div
        className={`w-full rounded-md p-[20px] flex flex-row justify-between items-center  ${
          theme === "dark" ? "card-dark" : "card-light rounded-sm"
        }`}
      >
        <p
          className={`font-semibold mt-[6px] md:text-[16px] text-[14px] ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {data.title}
        </p>
        <div
          onClick={() => {
            setSelectedChapter(index);
            router.push("/chapter/" + (index+1));
          }}
          className="md:px-[30px] px-[20px] py-[10px] cursor-pointer bg-[#64b72a] rounded-md"
        >
          <p
            className={`font-semibold md:text-[16px] text-[12px]  text-white`}
          >
            Read
          </p>
        </div>
      </div>
    );
  }

  return (
    <main
      className={` md:px-[40px] md:pb-[20px] md:pt-[20px] py-[20px] min-h-screen px-[20px] ${
        theme === "dark" ? "bg-dark" : "bg-light"
      }`}
    >
      {/* All Chapters */}
      {!loading ? (<div>
        <div className="flex md:flex-row flex-col gap-4">
          <div
            className={`p-[24px] ${
              theme === "dark" ? "card-dark" : "card-light"
            } rounded-[14px] md:w-[600px] w-full flex flex-col items-center h-fit`}
          >
            <h1
              className={`font-bold text-[32px] text-center ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              One Piece
            </h1>
            <div className="p-[10px] bg-[#9ca3af] rounded-full w-fit">
              <Image
                className="w-[200px] h-[200px] rounded-full"
                src={
                  "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9151765-107.jpg"
                }
                width={406}
                height={640}
                objectFit="cover"
                alt="thumbnail"
              />
            </div>
            <div>
              <p
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } mt-[20px]`}
              >
                Gol D. Roger, a man referred to as the &quot;Pirate King,&quot;
                is set to be executed by the World Government. But just before
                his demise, he confirms the existence of a great treasure, One
                Piece, located somewhere within the vast ocean known as the
                Grand Line. Announcing that One Piece can be claimed by anyone
                worthy enough to reach it, the Pirate King is executed and the
                Great Age of Pirates begins. Twenty-two years later, a young man
                by the name of Monkey D. Luffy is ready to embark on his own
                adventure, searching for One Piece and striving to become the
                new Pirate King. Armed with just a straw hat, a small boat, and
                an elastic body, he sets out on a fantastic journey to gather
                his own crew and a worthy ship that will take them across the
                Grand Line to claim the greatest status on the high seas.
              </p>
              <div className="w-full flex flex-row justify-between items-center mt-[20px]">
                <div>
                  <h3
                    className={`font-bold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } `}
                  >
                    Type
                  </h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-[#cccbcb]" : "text-[#302f2f]"
                    } `}
                  >
                    manga
                  </p>
                </div>
                <div>
                  <h3
                    className={`font-bold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } `}
                  >
                    Status
                  </h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-[#cccbcb]" : "text-[#302f2f]"
                    } `}
                  >
                    publishing
                  </p>
                </div>
                <div>
                  <h3
                    className={`font-bold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } `}
                  >
                    Year
                  </h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-[#cccbcb]" : "text-[#302f2f]"
                    } `}
                  >
                    1997
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
              <h3
                    className={`font-bold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } `}
                  >
                    Genres
                  </h3>
                  <p className={`${
                      theme === "dark" ? "text-[#cccbcb]" : "text-[#302f2f]"
                    } `}>Action, Adventure, Comedy, Fantasy, Shounen, Super Power</p>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-4">
            {chapters.map((item, index) => (
              <ChapterCard key={chapters.length - index-1} data={chapters[chapters.length - index-1]} index={chapters.length - index-1} />
            ))}
          </div>
        </div>
      </div>) : (
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
      )}
      
    </main>
  );
}
