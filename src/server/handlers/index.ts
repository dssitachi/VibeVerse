import { authHandler } from './auth';
import { postsHandler } from './posts';

export const handlers = [
  ...postsHandler,
  ...authHandler
];