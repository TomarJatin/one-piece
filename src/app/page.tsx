import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { FaBolt } from "react-icons/fa6";

function MangaCard() {
  return (
    <div className="w-[168px] h-[250px] rounded-[10px] card">
      <Image
        className="w-full h-full rounded-[10px]"
        src={"https://manga18fx.com/webtoon/under-the-oak-treem.jpg"}
        width={168}
        height={250}
        objectFit="cover"
        alt="thumbnail"
      />
      <div className="bg-black p-[10px] mt-[-40px] z-10 glass">
        <p className="text-white text-[15px]">One Piece</p>
      </div>
    </div>
  );
}

function ChapterCard() {
  return (
    <div>
      <Image
        className="w-[168px] h-[250px] rounded-[10px]"
        src={"https://manga18fx.com/webtoon/under-the-oak-treem.jpg"}
        width={168}
        height={250}
        objectFit="cover"
        alt="thumbnail"
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="md:mt-[40px] mt-[20px] md:px-[40px] px-[20px]">
      {/* Best Chapters */}
      <div>
        <div className="flex flex-row items-center md:gap-[20px] gap-[10px] border-b-[1px]">
          <div className="md:p-[10px] p-[6px] bg-[#795ebc]">
            <IoStarSharp className="md:w-[20px] w-[16px] md:h-[20px] h-[16px] text-white" />
          </div>
          <p className="font-semibold text-[18px]">Best Chapters</p>
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
          <p className="font-semibold text-[18px]">All Chapters</p>
        </div>
        <div className="py-[20px] grid gap-4 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) => (
            <ChapterCard key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
