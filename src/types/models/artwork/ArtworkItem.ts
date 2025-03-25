import ArtWorkItemMedia from "./ArtworkItemMedia";
import ArtWork from "./Artwork";
import Price from "./Price";
import Artist from "../artist/Artist";
import Category from "../category/Category";

type ArtworkItem = {
  id: number;
  createdAt: string;
  collectionNo: number;
  dimension: number;
  width: number;
  height: number;
  depth: number;
  material: string;
  title: string;
  description: string;
  itemCondition: string;
  productionYear: number;
  status: string;
  artworkId: number;
  artist: Artist;
  artwork: ArtWork;
  medias: ArtWorkItemMedia[];
  price: Price;
  categories: Category[];
  isFavorite: boolean;
  isInCart: boolean;
};

export default ArtworkItem;
