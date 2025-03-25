import Artwork from "../artwork/Artwork";

type CategoryWithId = {
  id: number;
  createdAt: string;
  name: string;
  artworks: Artwork[];
  artworkItems: Artwork[];
};

export default CategoryWithId;
