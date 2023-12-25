export interface DataContextType{
    theme: string;
    setTheme: any;
    chapters: Chapter[],
    selectedChapter: Chapter | null,
    setSelectedChapter: any
}


export interface Chapter {
    title: string;
    images: string[];
    // Add other fields as needed
  }