import {User} from "./User";

export interface Review {
  id?: number;
  content: string;
  created?: string;
  updated?: string;
  user?: User;
}