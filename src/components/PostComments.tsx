import type { Comment } from "../types";

interface Props {
  comments: Comment[];
}

function PostComments({ comments }: Props) {
  return (
    <div>
      {comments.map((comment) => (
        <p key={comment.id}>
          <strong>{comment.user.username}</strong>
          : {comment.text}
        </p>
      ))}
    </div>
  );
}

export default PostComments;