import { Controller } from '@nestjs/common';
import { PostsService } from '../services/posts.service';

@Controller('posts')
export class GetPostsController {
  constructor(private postsService: PostsService) {}
}
