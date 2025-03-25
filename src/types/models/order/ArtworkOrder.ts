import ArtworkOrderItem from "./ArtworkOrderItem";
import { User } from "../user";

type ArtworkOrder = {
  id: number;
  createdAt: string;
  orderId: string;
  userId: number;
  user?: User;
  price: string;
  items: ArtworkOrderItem[];
};

export default ArtworkOrder;
