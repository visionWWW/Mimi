import {User} from "./User";

export interface Review {
  id: number;
  grade: number;
  explain: string;
  restaurantName:string;
  hashtag: string;
  user: User;
}