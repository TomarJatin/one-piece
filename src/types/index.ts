export interface DataContextType{
    theme: string;
    setTheme: any;
    chapters: Chapter[];
    selectedChapter: number;
    setSelectedChapter: any;
    loading: boolean;
    setLoading: any;
}


export interface Chapter {
    title: string;
    images: string[];
    // Add other fields as needed
  }