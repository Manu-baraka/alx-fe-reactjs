import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Error fetching posts");
  return res.json();
};

function PostsComponent() {
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 10000,
    cacheTime: 60000,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={refetch}>Refetch Posts</button>
      {isFetching && <p>Updating...</p>}

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <b>{post.title}</b>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostsComponent;