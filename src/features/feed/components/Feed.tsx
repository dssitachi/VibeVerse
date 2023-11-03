import { useFeed } from "../api/getFeed";
import Post from "./Post";

export function Feed() {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status
      } = useFeed();
    
      console.log(data?.pages)
      if(status == "pending") return <div>Loading...</div>
    
      if(status == "error") return <div>{error.message}</div>
    
      return (
        <section className="ml-24 xl:ml-56 max-w-xl flex flex-col overflow-y-scroll flex-grow border-x">
          {
            data.pages.map((page, i) => (
              <div key={i} className="flex flex-col gap-2 w-full">
                {page.posts.map((post: any) => (
                  <Post key={post.id} post={post}/>
                ))}
              </div>
            ))
    
          }
        </section>
      );  
}
