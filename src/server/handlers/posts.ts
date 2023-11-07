import { http, HttpResponse } from 'msw'
import posts from '../data/posts';

type CreatePostBody = {
    body: string;
    imageUrl?: string;
    authordId: string;
    likeCount: number;
    commentCount: number;
}

type Post = {
    id: string;
  name: string;
  username: string;
  body: string;
  imageUrl?: string;
  likesCount: number;
  commentsCount: number;
  avatar: string;
}

export const postsHandler = [
    http.get('/api/posts', ({ request }) => {
        const url = new URL(request.url)
        const cursor = url.searchParams.get('cursor')

        return HttpResponse.json({
            posts: posts.slice(Number(cursor), Number(cursor) + 10),
            next: Number(cursor) + 10
        })
    }),

    http.patch('/api/posts/:postId', async ({ request, params }) => {
        const { postId } = params 
        const updatedPost: Post = await request.json() as Post;
        const prevPost = posts.find(post => post.id === postId)
        await new Promise((resolve) => setTimeout(resolve, 4000))

        if(prevPost) {
            prevPost.body = updatedPost.body
            prevPost.imageUrl = updatedPost.imageUrl
            prevPost.avatar = updatedPost.avatar
            prevPost.commentsCount = updatedPost.commentsCount
            prevPost.likesCount = updatedPost.likesCount
        }

        return HttpResponse.json({
            post: updatedPost
        })
    })

]