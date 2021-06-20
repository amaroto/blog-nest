import { Injectable } from '@nestjs/common';
import { Post } from '../domain/post';
import { PostsService } from '../insfrastructure/posts.service';

@Injectable()
export class GetPost {
    constructor(private postsService: PostsService) {}

    async execute(id: string): Promise<Post> {
        return this.postsService.getPost(id);
    }
}
