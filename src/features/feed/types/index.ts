import { BaseEntity } from '@/types';

export type Post = {
  id: string;
  name: string;
  username: string;
  body: string;
  imageUrl?: string;
  likesCount: number;
  commentsCount: number;
  avatar: string;
}