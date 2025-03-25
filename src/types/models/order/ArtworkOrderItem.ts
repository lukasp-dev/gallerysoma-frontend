import ArtWorkItem from "../artwork/ArtworkItem";

type ArtworkOrderItem = {
  id: number;
  createdAt: string;
  orderID: number;
  artworkItemId: number;
  artworkItem: ArtWorkItem;
};

export default ArtworkOrderItem;
