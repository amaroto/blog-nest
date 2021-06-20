import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { GetPost } from 'src/posts/application/getPost';
import { Post } from 'src/posts/domain/post';

@Controller('post')
export class GetPostController {
    constructor(private getPost: GetPost) {}
  
    @Get(':id')
    execute(@Param('id') id: string): Promise<Post> {
        return this.getPost.execute(id);
    }
  }
  
