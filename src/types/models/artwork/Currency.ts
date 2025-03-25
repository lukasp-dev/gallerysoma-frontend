import Media from "./Media";

type ArtWorkItemMedia = {
  id: number;
  createdAt: string;
  mediaId: number;
  artworkItemId: number;
  media: Media;
};

export default ArtWorkItemMedia;
