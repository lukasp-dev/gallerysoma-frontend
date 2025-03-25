import ShippingMethod from "../shipping/ShippingMethod";
import ArtworkItem from "./ArtworkItem";

type ArtworkIsInCart = {
  id: number;
  userId: number;
  artworkItemId: number;
  size: number;
  shippingMethodId: number;
  artworkItem: ArtworkItem;
  shippingMethod: ShippingMethod;
};

export default ArtworkIsInCart;
