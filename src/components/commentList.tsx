import { CommentProps } from "@/lib/props";
import { formatRelativeDate } from "@/lib/utils";
import { AiOutlineUser } from "react-icons/ai";
import Reply from "./reply";

export default function CommentList({ comment }: { comment: CommentProps }) {
  return (
    <div key={comment.id}>
      <div className="flex gap-x-8 items-center">
        <div className="flex gap-x-4 items-center">
          <span className="rounded-full bg-sky-200 p-1">
            <AiOutlineUser size={20} />
          </span>
          <h6 className="font-semibold">{comment.author.firstName}</h6>
        </div>
        <h6 className="text-opacity-40">
          {formatRelativeDate(comment.createdAt)}
        </h6>
      </div>
      <p className="text-sm">{comment.content}</p>
      <Reply parent={true} parentId={comment.id} postId={comment.postId} />
      {comment.children && comment.children.length > 0 && (
        <div className="ml-8">
          {comment.children.map((childComment) => (
            <CommentList key={childComment.id} comment={childComment} />
          ))}
        </div>
      )}
    </div>
  );
}