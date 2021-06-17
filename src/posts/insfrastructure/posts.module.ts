import { Module } from '@nestjs/common';
import { GetPostsController } from './controller/getPosts.controller';
import { PostsService } from './services/posts.service';

@Module({
  controllers: [GetPostsController],
  providers: [PostsService],
})
export class PostsModule {}
