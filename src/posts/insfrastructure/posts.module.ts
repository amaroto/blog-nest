import { Module } from '@nestjs/common';
import { GetPosts } from '../application/getPosts';
import { GetPostsController } from './controller/getPosts/getPosts.controller';
import { GetPostController } from './controller/getPost/getPost.controller';
import { PostsService } from './posts.service';
import { GetPost } from '../application/getPost';

@Module({
  controllers: [
    GetPostsController,
    GetPostController
  ],
  providers: [
    GetPost,
    GetPosts,
    PostsService
  ],
})
export class PostsModule {}
