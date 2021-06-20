import { HttpException, Injectable } from '@nestjs/common';
import { Post } from '../domain/post';
import { PostsService } from '../insfrastructure/posts.service';

@Injectable()
export class GetPost {
    constructor(private postsService: PostsService) {}

    async execute(id: string): Promise<Post> {
        const post = await this.postsService.find(id);

        if (!post) {
            throw new HttpException('Post does not exist', 404);
        }

        return post;
    }
}
