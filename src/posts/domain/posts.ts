import { IPost } from "./post.interface";

export class Posts{

  data: Array<IPost>;

  constructor(posts: Array<IPost>) {
    this.data = posts;
  }

}
