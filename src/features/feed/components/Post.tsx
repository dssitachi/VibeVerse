import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, Heart, MessageSquare, Share } from "lucide-react";
import { useUpdatePost } from "../api/updatePost";


function Post({post}: {post: any}) {

    const updatePostMutation = useUpdatePost();

    function handleLikeClick() {
        updatePostMutation.mutate({...post, likesCount: post.likesCount + 1});
    }
    return (
        <div className="flex py-3 px-2 gap-2 w-full border-b">
            {/* Avatar */}
            <div>
                <Avatar>
                    <AvatarImage
                        src={post.avatar}
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-col w-full">
                {/* Username */}
                <div className="flex  gap-1 items-baseline">
                    <span className="font-semibold"> {post.name} </span>
                    <span className="text-slate-500 text-sm "> @{post.username}</span>
                    <span className="text-slate-500 text-sm "> . Oct 30</span>
                </div>

                {/* Post details */}
                <div className="pb-1 text-sm">
                    {post.body}
                </div>

                {/* Icons */}
                <div className="flex justify-between w-full">
                    <div className="flex gap-2 items-center w-16 hover:cursor-pointer hover:text-blue-400" >
                        <MessageSquare size={16} strokeWidth={1.25} />
                        <span className="text-slate-400 text-xs hover:text-blue-400">{post.commentsCount}</span>
                    </div>
                    <div className="group flex gap-2 items-center hover:cursor-pointer" onClick={handleLikeClick}>
                        <Heart size={16} strokeWidth={1.25} className="group-hover:text-pink-500" />
                        <span className="text-slate-400 text-xs group-hover:text-pink-500">{post.likesCount}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Bookmark size={16} strokeWidth={1.25} />
                    </div>
                    <div className="flex gap-2 items-center">
                        <Share size={16} strokeWidth={1.25} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
