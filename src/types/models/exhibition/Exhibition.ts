import ExhibitionCategory from "./ExhibitionCategory";

type Exhibition = {
  id: number;
  createdAt: string;
  startDate: string;
  endDate: string;
  titleKo: string;
  titleEn: string;
  thumbnailPath: string;
  category: ExhibitionCategory;
};

export default Exhibition;
