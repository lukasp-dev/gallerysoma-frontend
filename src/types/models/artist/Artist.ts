import ArtistDescription from "./ArtistDescription";
import ArtistBio from "./ArtistBiography";

type Artist = {
  id: number;
  createdAt: string;
  name: string;
  description: ArtistDescription[];
  bio: ArtistBio[];
  representativeImagePath: string;
  country: string;
};

export default Artist;
