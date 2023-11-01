import Post from "@/components/Post";

function Feed() {
    return (
        <section className="ml-24 xl:ml-56 max-w-xl flex flex-col overflow-y-scroll flex-grow border-x">
            <Post />
            <Post />
            <Post />

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </section>
    );
}

export default Feed;
