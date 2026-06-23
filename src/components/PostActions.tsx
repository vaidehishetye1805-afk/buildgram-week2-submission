interface Props {
  likes: number;
  isLiked: boolean;
  isSaved: boolean;
  onLike: () => void;
  onSave: () => void;
}

function PostActions({
  likes,
  isLiked,
  isSaved,
  onLike,
  onSave,
}: Props) {
  return (
    <div>
      <button onClick={onLike}>
        {isLiked ? "❤️ Unlike" : "🤍 Like"}
      </button>

      <button onClick={onSave}>
        {isSaved ? "Saved" : "Save"}
      </button>

      <p>{likes} likes</p>
    </div>
  );
}

export default PostActions;