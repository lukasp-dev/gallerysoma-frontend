import Media from "./Media";

type ArtworkItemMedia = {
  id: number;
  createdAt: string;
  mediaId: number;
  artworkItemId: number;
  media: Media;
};

export default ArtworkItemMedia;
