import React, { createContext, useState, useEffect } from "react";
import { DataContextType } from "../types";
import { firestore, collection, getDocs } from "@/lib/firebase";
import { Chapter } from "../types";

// Define the context
const DataContext = createContext<DataContextType | null>(null);


// Data Provider component
const DataProvider= ({ children }: any) => {
  const [theme, setTheme] = useState("dark");
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const chaptersCollection = await getDocs(collection(firestore, 'manga', 'Chainsaw man', 'chapters'));
        const chaptersData: Chapter[] = chaptersCollection.docs.map(
          (doc) => doc.data() as Chapter
        );
        console.log(chaptersData);
        setChapters(chaptersData);
      } catch (error) {
        console.error('Error fetching chapters:', error);
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
        setSelectedChapter
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };