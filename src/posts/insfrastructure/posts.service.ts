import { Injectable } from '@nestjs/common';
import { Post } from 'src/posts/domain/post';
import { POSTS } from 'src/posts/domain/mocks/posts.mock';
import { Posts } from '../domain/posts';
import { PostServicesInterface } from '../domain/postServices.interface';

@Injectable()
export class PostsService implements PostServicesInterface {
    private posts = new Posts(POSTS);

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

    getPosts(): Posts {
        return this.posts;
    }
    
    getPost(id: string): Post {
        return this.posts.data[0];
    }

    deletePost(): void {
        throw new Error('Method not implemented.');
    }

    createPost(): void {
        throw new Error('Method not implemented.');
    }

    updatePost(): void {
        throw new Error('Method not implemented.');
    }
}
