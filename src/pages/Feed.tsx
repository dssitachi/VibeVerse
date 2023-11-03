import { useFeed } from "@/features/feed/api/getFeed";

function Example() {
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
          <div key={i}>
            {page.posts.map((item) => (
              <div key={item.id}>{item.body}</div>
            ))}
          </div>
        ))

      }
    </section>
  );    
}

export default Example;