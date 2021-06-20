import { PostInterface as PostI } from "./post.interface";

export class Posts{

  posts: Array<PostI>;

  constructor(posts: Array<PostI>) {
    this.posts = posts;
  }

}
