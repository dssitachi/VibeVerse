import { InfiniteData, useMutation } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { Post } from '../types';
import { queryClient } from "@/lib/react-query";


function updatePost(data: Post): Promise<Post> {
	return axios.patch(`/api/posts/${data.id}`, data);
}

export function useUpdatePost() {
	return useMutation({
		mutationFn: updatePost,
		onMutate: async (modifiedPost: Post) => {
			await queryClient.cancelQueries({ queryKey: ["feed"] });
			const previousInfiniteQueryData: InfiniteData<Array<Post>> = queryClient.getQueryData(['feed'])!
			
			queryClient.setQueryData<InfiniteData<Array<Post>>>(['feed'], (previousInfiniteQueryData: any) => {
				const newData = previousInfiniteQueryData?.pages.map((page: {posts: Post[]}) => ({
					...page,
					posts: page.posts.map((post: Post) => {
						if (post.id === modifiedPost.id) {
							return modifiedPost
						}
						return post
					})
				}))	

				return {
					...previousInfiniteQueryData,
					pages: newData,
				}
			})

			
			return { previousInfiniteQueryData }
		},
		onError: (err, modifiedPost, context) => {
			queryClient.setQueryData(
				['feed'], context?.previousInfiniteQueryData,
			)
		},
		// Always refetch after error or success:
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['feed'] })
		},
	})
}