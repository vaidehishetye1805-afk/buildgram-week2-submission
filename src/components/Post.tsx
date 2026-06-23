import { useState } from "react";

import type { PostType } from "../types";

import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import PostComments from "./PostComments";

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);

  const [likeCount, setLikeCount] =
    useState(post.likes);

  const [isSaved, setIsSaved] =
    useState(false);

  const [comments, setComments] =
    useState(post.comments);

  const [newComment, setNewComment] =
    useState("");

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }

    setIsLiked(!isLiked);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now().toString(),
      user: post.user,
      text: newComment,
      timestamp: "Just now",
    };

    setComments([...comments, comment]);

    setNewComment("");
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "20px",
        padding: "20px",
      }}
    >
      <PostHeader user={post.user} />

      <PostImage imageUrl={post.imageUrl} />

      <p>{post.caption}</p>

      <PostActions
        likes={likeCount}
        isLiked={isLiked}
        isSaved={isSaved}
        onLike={handleLike}
        onSave={handleSave}
      />

      <PostComments comments={comments} />

      <input
        type="text"
        value={newComment}
        placeholder="Add comment..."
        onChange={(e) =>
          setNewComment(e.target.value)
        }
      />

      <button onClick={handleCommentSubmit}>
        Post
      </button>
    </div>
  );
}

export default Post;