import { BaseEntity } from '@/types';

export type Post = {
  body: string;
  author: string;
  createdAt: Date;
  likes: number;
  retweets: number;
} & BaseEntity;