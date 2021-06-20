import { Module } from '@nestjs/common';
import { GetPosts } from '../application/getPosts';
import { GetPostsController } from './controller/getPosts.controller';
import { PostsService } from './services/posts.service';

@Module({
  controllers: [GetPostsController],
  providers: [GetPosts, PostsService],
})
export class PostsModule {}
