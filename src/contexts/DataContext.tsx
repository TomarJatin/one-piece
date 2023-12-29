import React, { createContext, useState, useEffect } from "react";
import { DataContextType } from "../types";
import { firestore, collection, getDocs } from "@/lib/firebase";
import { Chapter } from "../types";

// Define the context
const DataContext = createContext<DataContextType | null>(null);

// Data Provider component
const DataProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("dark");
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<number>(-1);
  const [loading, setLoading] = useState(false);

  const sortByChapter = (a: any, b: any) => {
    // Extract chapter numbers from titles
    const chapterA = parseInt(a.title.match(/Chapter (\d+)/)[1]);
    const chapterB = parseInt(b.title.match(/Chapter (\d+)/)[1]);

    // Compare chapter numbers
    return chapterA - chapterB;
  };

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        setLoading(true);
        const chaptersCollection = await getDocs(
          collection(firestore, "manga", "one piece", "chapters")
        );
        const chaptersData: Chapter[] = chaptersCollection.docs
          .map((doc) => doc.data() as Chapter)
          .sort(sortByChapter);
        console.log(chaptersData);
        setChapters(chaptersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchChapters();
  }, []);

  return (
    <DataContext.Provider
      value={{
        theme,
        setTheme,
        chapters,
        selectedChapter,
        setSelectedChapter,
        loading,
        setLoading
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
