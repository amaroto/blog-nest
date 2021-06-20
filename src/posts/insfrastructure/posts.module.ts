import { Module } from '@nestjs/common';
import { GetPosts } from '../application/getPosts';
import { GetPostsController } from './controller/getPosts/getPosts.controller';
import { GetPostController } from './controller/getPost/getPost.controller';
import { PostsService } from './posts.service';
import { GetPost } from '../application/getPost';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './mongoose/post.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
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
