import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Post } from 'src/posts/domain/post';
import { Posts } from '../domain/posts';
import { IPostServices } from '../domain/postServices.interface';
import { Post as PostSchema, PostDocument } from './mongoose/post.schema';

@Injectable()
export class PostsService implements IPostServices {

    constructor(@InjectModel(PostSchema.name) private readonly postModel: Model<PostDocument>) {}

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

    search(): (Posts | any) {
        return this.postModel.find().exec();
    }
    
    find(id: string): (Post | any) {
        return this.postModel.findById(id).exec();
    }

    delete(): void {
        throw new Error('Method not implemented.');
    }

    create(): void {
        throw new Error('Method not implemented.');
    }

    update(): void {
        throw new Error('Method not implemented.');
    }
}
