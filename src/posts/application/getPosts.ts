import { Injectable } from '@nestjs/common';
import { PostsService } from '../insfrastructure/services/posts.service';

@Injectable()
export class GetPosts {
    constructor(private postsService: PostsService) {}

    public async execute() {
        return this.postsService.getPosts();
    }
}
