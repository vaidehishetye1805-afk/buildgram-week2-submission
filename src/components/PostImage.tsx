interface Props {
  imageUrl: string;
}

function PostImage({ imageUrl }: Props) {
  return (
    <img
      src={imageUrl}
      alt="post"
      width="400"
    />
  );
}

export default PostImage;