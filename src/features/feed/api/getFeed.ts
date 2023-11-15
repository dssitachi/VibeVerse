import { axios } from "@/lib/axios";
import { useInfiniteQuery } from "@tanstack/react-query";


async function fetchPosts ({ pageParam }: { pageParam: number} )  {
    const res = await axios.get('http://localhost:8080/posts?cursor=' + pageParam)
    return { posts: res.data.posts, next: res.data.next }
}

type PostResponse = { next?: number; posts: any[] }

export function useFeed() {
    return useInfiniteQuery({
        queryKey: ['feed'],
        queryFn: fetchPosts,
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {return lastPage.next}
    });
}