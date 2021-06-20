import { PostInterface } from "./post.interface";

export class Post implements PostInterface{
  readonly id: string;
  name: string;
  description: string;
  metadata: object;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;

  constructor(
    id: string,
    name: string,
    description: string,
    metadata: object,
    updatedAt: Date,
    createdAt: Date,
    deletedAt: Date | null
  ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.metadata = metadata;
      this.updatedAt = updatedAt;
      this.createdAt = createdAt;
      this.deletedAt = deletedAt;
  }
}
