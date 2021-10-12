import {User} from "./User";

export interface Board {
  id?: number;
  content: string;
  created?: string;
  updated?: string;
  user?: User;
}