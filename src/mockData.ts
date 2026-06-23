import type { User, Comment, PostType } from "./types";

const user1: User = {
  id: "1",
  username: "user_1",
  avatarUrl: "https://i.pravatar.cc/150?img=1",
  bio: "Learning React",
  postCount: 2,
  followerCount: 120,
};

const user2: User = {
  id: "2",
  username: "user_2",
  avatarUrl: "https://i.pravatar.cc/150?img=2",
  bio: "Backend Developer",
  postCount: 1,
  followerCount: 250,
};

const comment1: Comment = {
  id: "1",
  user: user2,
  text: "Awesome picture!",
  timestamp: "2h ago",
};

const comment2: Comment = {
  id: "2",
  user: user1,
  text: "Thanks!",
  timestamp: "1h ago",
};

export const mockPosts: PostType[] = [
  {
    id: "1",
    user: user1,
    imageUrl: "https://picsum.photos/600/400?random=1",
    caption: "My first BuildGram post",
    likes: 15,
    comments: [comment1, comment2],
    timestamp: "3h ago",
  },
  {
    id: "2",
    user: user2,
    imageUrl: "https://picsum.photos/600/400?random=2",
    caption: "Learning React today",
    likes: 8,
    comments: [comment1],
    timestamp: "5h ago",
  },
  {
    id: "3",
    user: user1,
    imageUrl: "https://picsum.photos/600/400?random=3",
    caption: "TypeScript is fun",
    likes: 22,
    comments: [],
    timestamp: "1 day ago",
  },
];