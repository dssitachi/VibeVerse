import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Feather, Loader2 } from "lucide-react";
import { useState } from "react";
import { useCreatePost } from "../api/createPost";

export function CreatePost() {
    const [open, setOpen] = useState(false);
    const createPostMutation = useCreatePost();
    const [postBody, setPostBody] = useState("");

    async function handle() {
        try {
            await createPostMutation.mutateAsync({
                body: postBody,
            });
            setPostBody("")
            setOpen(false);
        } catch (err) {}
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Feather />
                    <span className="hidden xl:block">Vibe</span>
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add a post</DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <Textarea
                        placeholder="What's on your mind?"
                        value={postBody}
                        onChange={(e) => {
                            setPostBody(e.target.value);
                        }}
                    />
                </div>

                <DialogFooter>
                    <Button
                        type="submit"
                        onClick={handle}
                        disabled={createPostMutation.isPending}
                    >
                        {createPostMutation.isPending && <Loader2 />}
                        Post
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
