export interface IPost{
  id: string;
  name: string;
  description: string;
  metadata: object;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
}
