import { useParams } from "react-router-dom";
import { mockPosts } from "../mockData";

function ProfilePage() {
  const { username } = useParams();

  const userPosts = mockPosts.filter(
    (post) => post.user.username === username
  );

  if (userPosts.length === 0) {
    return <h2>User not found</h2>;
  }

  const user = userPosts[0].user;

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={user.avatarUrl}
        alt="avatar"
        width="100"
      />

      <h2>{user.username}</h2>

      <p>{user.bio}</p>

      <p>Posts: {user.postCount}</p>

      <p>Followers: {user.followerCount}</p>

      <h3>User Posts</h3>

      {userPosts.map((post) => (
        <img
          key={post.id}
          src={post.imageUrl}
          alt="post"
          width="250"
          style={{ margin: "10px" }}
        />
      ))}
    </div>
  );
}

export default ProfilePage;