export interface PageProps {
  params: { id: string }
}

export interface Post {
  id: string
  authorId: string
  channelId: null | string
  content: string
  createdAt: Date
  title: string
  updatedAt: Date
  author: { firstName: string }
}

export interface CommentProps {
  id: string;
  createdAt: Date;
  content:string;
  postId: string;
  author: {
    firstName: string;
  }
  children?: CommentProps[];
}