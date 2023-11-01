import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, Heart, MessageSquare, Share } from "lucide-react";

function Post() {
    return (
        <div className="flex p-2 gap-2">
            {/* Avatar */}
            <div>
                <Avatar>
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-col gap-1">
                {/* Username */}
                <div className="flex items-baseline">
                    <span className="font-bold"> Shadcn </span>
                    <span className="text-slate-500 text-sm "> @shadcnUI</span>
                    <span className="text-slate-500 text-sm "> . Oct 30</span>
                </div>

                {/* Post details */}
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deserunt aperiam eius voluptatibus optio consectetur,
                    impedit quod repellat deleniti doloribus ex voluptates
                    voluptatum veniam doloremque, officiis quo, commodi quae eum
                    maxime!
                </div>

                {/* Icons */}
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <MessageSquare size={16} strokeWidth={1.25} />
                        <span className="text-slate-400 text-sm">45</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Heart size={16} strokeWidth={1.25} />
                        <span className="text-slate-400 text-sm">45</span>
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
