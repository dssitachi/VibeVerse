import { axios } from "@/lib/axios";
import { Post } from "..";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

function createPost(data: any) {
    return axios.post('/api/posts', data)
}

export function useCreatePost() {
    return useMutation({
        mutationFn: createPost,
        onMutate: async (newPost: any) => {

        },
        onError: (err, newPost, context) => {

        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ['feed']})
        }
    })
}
