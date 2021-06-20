import { Post } from "./post";
import { Posts } from "./posts";

export interface IPostServices {
  search(): Posts;

  find(id: string): (Post | any);

  delete(): void;

  create(): void;

  update(): void;
}
