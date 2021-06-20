import { IPost } from "./post.interface";

export class Post implements IPost{
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly metadata: object;
  readonly updatedAt: Date;
  readonly createdAt: Date;
  readonly deletedAt: Date | null;

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
