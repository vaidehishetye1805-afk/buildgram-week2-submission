import { mockPosts } from "../mockData";
import Post from "./Post";

function Feed() {
  return (
    <main>
      {mockPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}

export default Feed;