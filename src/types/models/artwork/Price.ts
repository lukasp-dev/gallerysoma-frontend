import Currency from "./Currency";

type Price = {
  artworkItemId: number;
  createdAt: string;
  currency: Currency;
  currencyId: number;
  id: number;
  price: number;
};

export default Price;
