import { Controller, Get } from '@nestjs/common';
import { GetPosts } from 'src/posts/application/getPosts';

@Controller('posts')
export class GetPostsController {
  constructor(private getPosts: GetPosts) {}

  @Get()
  async execute(): Promise<Object> {
    const posts = await this.getPosts.execute();
    return posts.data;
  }
}
