import { PostInterface as PostI } from "./post.interface";

export class Posts{

  data: Array<PostI>;

  constructor(posts: Array<PostI>) {
    this.data = posts;
  }

}
