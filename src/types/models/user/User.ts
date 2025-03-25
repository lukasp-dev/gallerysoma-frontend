import UserAddress from "./UserAddress";
import { Authority } from "../base";

type User = {
  id: number;
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  birthday: string;
  authorities?: Authority[];
  addresses?: UserAddress[];
  password?: string;
  addressPrimary: UserAddress;
  addressPrimaryId: number;
};

export default User;
