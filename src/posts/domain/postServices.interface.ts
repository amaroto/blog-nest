import { Post } from "./post";
import { Posts } from "./posts";

export interface PostServicesInterface {
  getPosts(): Posts;

  getPost(id: string): Post;

  deletePost(): void;

  createPost(): void;

  updatePost(): void;
}
