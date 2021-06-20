import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
    @Prop({ required: true })
    id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ type: Object })
    metadata: object;

    @Prop({ required: true })
    createdAt: Date;
    
    @Prop({ required: true })
    updatedAt: Date;
    
    @Prop()
    deletedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);