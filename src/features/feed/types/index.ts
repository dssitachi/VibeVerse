import { BaseEntity } from '@/types';

export type Post = {
  body: string;
  authorId: string;
  createdAt: Date;
  likes: number;
  retweets: number;
} & BaseEntity;