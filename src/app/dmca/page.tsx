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

export default function Page() {
  const { theme } = useContext(DataContext) as DataContextType;

  return (
    <div
      className={`${theme === "dark" ? "bg-dark" : "bg-light"} `}
    >
      {
        <div className="w-full md:px-[40px] px-[20px] pb-[40px]">
          <p
            className={`text-center font-semibold md:text-[32px] text-[24px] pt-[40px] ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            DMCA
          </p>

          {/* Chapters */}
          <div
            className={`flex flex-col items-center justify-center gap-2  mt-[40px]`}
          >
            <div className={`max-w-[990px] w-full`}>
              <p
                className={` font-semibold  ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                This website doesn’t host any content on it own server and is
                just linking to or embedding content that was uploaded to
                popular image hosting sites like Imgur, Cubeupload, Google Drive
                and such sites. All trademarks, comics, trade names, service
                marks, copyrighted work, logos referenced herein belong to their
                respective owners/companies. This website is not responsible
                for what other people upload to 3rd party sites. We urge all
                copyright owners, to recognize that the links contained within
                this site are located somewhere else on the web or image
                embedded are from others various site like included above! If
                you have any legal issues please contact the appropriate media
                file owners or host sites. This privacy policy is intended to
                inform you about the types of information gathered by
                this website when you visit read-onepiece.net. Log Files We
                may automatically and through third-party tracking services
                (e.g., Google Analytics) gather certain non-personally
                identifiable information about your use of read-onepiece.net and
                store it in log files. This information may include internet
                protocol (IP) addresses, browser type, internet service provider
                (ISP), referring/exit pages, operating system, date/time stamps,
                and related data. We use this information, which does not
                identify individual users, solely to improve the quality of our
                services. Out of respect for your privacy, we do not link this
                automatically-collected data to personally identifiable
                information. COOKIES A cookie is a small text file that is
                stored on a user’s computer for record-keeping purposes. We use
                both session ID cookies and tracking cookies. We use session
                cookies to make it easier for you to use read-onepiece.net. A
                session ID cookie expires when you close your browser. We use
                tracking cookies to better understand how you use
                read-onepiece.net, and to enhance your user experience. A
                tracking cookie remains on your hard drive for an extended
                period of time. You are free to decline cookies, but by doing
                so, you may not be able to take full advantage of all of our
                offerings. We do not link the information we store in cookies to
                any personally identifiable information you submit while using
                read-onepiece.net. UPDATES We may periodically update this
                policy. If you subscribe, we will attempt to notify you of
                material updates by email. Otherwise, you may view the updated
                version of this policy on the Rulu Technologies LLP website
                available at https://readonepiece.vercel.app/dmca/
              </p>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
