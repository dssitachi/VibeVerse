import { http, HttpResponse } from 'msw'
import posts from '../data/posts';

type CreatePostBody = {
    body: string;
    imageUrl?: string;
    authordId: string;
    likeCount: number;
    commentCount: number;
}

export const postsHandler = [
    http.get('/api/posts', ({ request }) => {

        const url = new URL(request.url)

        const cursor = url.searchParams.get('cursor')

        return HttpResponse.json({
            posts: posts.slice(Number(cursor), Number(cursor) + 10),
            next: Number(cursor) + 10
        })
    })
]