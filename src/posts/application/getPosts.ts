import { Injectable } from '@nestjs/common';
import { Posts } from '../domain/posts';
import { PostsService } from '../insfrastructure/posts.service';

@Injectable()
export class GetPosts {
    constructor(private postsService: PostsService) {}

    async execute(): Promise<Posts|any> {
        return this.postsService.search();
    }
}
