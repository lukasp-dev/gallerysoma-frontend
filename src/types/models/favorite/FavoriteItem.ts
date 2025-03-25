import ArtworkItem from "../artwork/ArtworkItem";

type FavoriteItem = {
  id: number;
  status: string;
  createdAt: string;
  artworkItem: ArtworkItem;
};

export default FavoriteItem;
