import React, { useEffect, useRef } from "react";
import { useFeed } from "../api/getFeed";
import Post from "./Post";
import { Button } from "@/components/ui/button"

export function Feed() {
    const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status} = useFeed();
    const bottomRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection);
        const elementRef = bottomRef.current;
        console.log(elementRef)
        if (elementRef) observer.observe(elementRef);

        return () => {
            if (elementRef) observer.unobserve(elementRef);
        };
    }, []);

    function handleIntersection(entries: any) {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
            console.log("hello");
            fetchNextPage();
        }
    }

    // if (status == "pending") return <div>Loading...</div>;

    if (status == "error") return <div>{error.message}</div>;

    return (
        <section className="ml-24 xl:ml-56 max-w-xl flex flex-col overflow-y-scroll flex-grow border-x">
            {data?.pages.map((page, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <div key={index} className="flex flex-col w-full">
                            {page.posts.map((post: any) => (
                                <Post key={post.id} post={post} />
                            ))}
                        </div>
                        {index == data.pages.length - 1 && (
                            <div ref={bottomRef} className="h-10"></div>
                        )}
                    </React.Fragment>
                );
            })}
            <div ref={bottomRef} className="h-10"></div>
            {/* <Button onClick={() => {fetchNextPage()}}>Load More data</Button> */}
        </section>
    );
}
