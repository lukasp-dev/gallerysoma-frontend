import Artist from "../artist/Artist";
import ArtWorkCategory from "./ArtWorkCategory";
import ArtworkItem from "./ArtworkItem";

type Artwork = {
  id: number;
  createdAt: string;
  title: string;
  artistId: number;
  categoryId: number;
  status: string;
  artist: Artist;
  category: ArtWorkCategory;
  items: ArtworkItem[];
  artWorkImgs: string[];
};

export default Artwork;
