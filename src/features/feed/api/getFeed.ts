import { axios } from "@/lib/axios";
import { useInfiniteQuery } from "@tanstack/react-query";


async function fetchPosts ({ pageParam }: { pageParam: number} )  {
    const res = await axios.get('/api/posts?cursor=' + pageParam)
    return { posts: res.data.posts, next: res.data.next }
}

type PostResponse = { next?: number; posts: any[] }

export function useFeed() {
    return useInfiniteQuery({
        queryKey: ['projects'],
        queryFn: fetchPosts,
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => {return lastPage.next}
    });
}