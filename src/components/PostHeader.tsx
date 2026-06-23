import { Link } from "react-router-dom";
import type { User } from "../types";

interface Props {
  user: User;
}

function PostHeader({ user }: Props) {
  return (
    <div>
      <Link to={`/profile/${user.username}`}>
        <h3>{user.username}</h3>
      </Link>
    </div>
  );
}

export default PostHeader;