import { Module } from '@nestjs/common';
import { PostsModule } from './posts/insfrastructure/posts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PostsModule,
    MongooseModule.forRoot('mongodb://localhost/post_manager')
  ]
})
export class AppModule {}
