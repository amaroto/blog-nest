import { Injectable } from '@nestjs/common';
import { Post } from 'src/posts/domain/entities/post';
import { POSTS } from 'src/posts/domain/mocks/posts.mock';

@Injectable()
export class PostsService {
    private posts = POSTS;

    private fromRaw (data: Array<any>) {
        return new Post(
            data['id'],
            data['name'],
            data['description'],
            data['metadata'],
            data['createdAt'],
            data['updatedAt'],
            data['deletedAt'],
        );
    }

    public async getPosts() {
        return this.posts;
    }
}
