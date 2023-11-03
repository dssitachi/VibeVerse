import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, Heart, MessageSquare, Share } from "lucide-react";

function Post({post}: {post: any}) {
    return (
        <div className="flex p-2 gap-2 w-full">
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
            <div className="flex flex-col gap-1 w-full">
                {/* Username */}
                <div className="flex  gap-1 items-center">
                    <span className="font-bold"> {post.name} </span>
                    <span className="text-slate-500 text-sm "> @{post.username}</span>
                    <span className="text-slate-500 text-sm "> . Oct 30</span>
                </div>

                {/* Post details */}
                <div>
                    {post.body}
                </div>

                {/* Icons */}
                <div className="flex justify-between w-full">
                    <div className="flex gap-2 items-center">
                        <MessageSquare size={16} strokeWidth={1.25} />
                        <span className="text-slate-400 text-sm">{post.likesCount}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Heart size={16} strokeWidth={1.25} />
                        <span className="text-slate-400 text-sm">{post.commentsCount}</span>
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
