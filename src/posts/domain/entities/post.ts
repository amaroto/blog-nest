import { PostInterface } from "./post.interface";

export class Post implements PostInterface{
  readonly id: string;
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
