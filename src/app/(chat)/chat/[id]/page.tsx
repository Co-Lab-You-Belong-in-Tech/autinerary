import { CommentProps, PageProps } from "@/lib/props";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import Reply from "@/components/reply";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import CommentList from "@/components/commentList";

async function getPost(id: string) {
  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      author: {
        select: {
          firstName: true
        }
      }
    }
  })
  return post
}

async function getComments(id: string, page=1 ) {
  const limit = 10
  const skip = (page - 1) * limit

  const comments = await prisma.comment.findMany({
    where: { postId: id },
    include: {
      author: {
        select: {
          firstName: true
        }
      },
      children: {
        include: {
          author: {
            select: {
              firstName: true
            }
          }
        }
      },
    },
    skip: skip,
    take: limit
  })

  const topLevelComments = comments.filter(
    (comment) => !comment.parentCommentId
  );

  // Recursively build the comment tree
  const buildCommentTree = (comment: CommentProps) => {
    comment.children = comments
      .filter((c) => c.parentCommentId === comment.id)
      .map(buildCommentTree);
    return comment;
  };

  return topLevelComments.map(buildCommentTree)
}

export default async function SinglePost({ params: { id } }: PageProps) {
  const post = await getPost(id)
  if (!post) return notFound()
  const comments = await getComments(id)

  return (
    <section className='mt-8 py-8 bg-sky-400 bg-opacity-25'>
      <div className='my-6 py-6 bg-white rounded-xl px-12 mx-12'>
        <div className="flex justify-between items-center px-8 py-3">
          <h1 className="text-sky-400 text-3xl md:text-4xl">{post?.title}</h1>
          <Link className='px-8 py-4 rounded-xl shadow-lg bg-sky-50 text-2xl text-center leading-4' href='/chat/new'>Start a Discussion</Link>          
        </div>
        <div className="flex px-8 gap-x-4 items-center">
          <span className='rounded-full bg-sky-200 p-1'><AiOutlineUser size={20} /></span>
          <h6>{post?.author.firstName}</h6>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post?.content }} className="px-8 mt-6 prose" />
        <hr className="border my-4 px-8" />

        <Reply postId={post?.id} />
        
        <div className="px-8 mt-4">
          <h2 className="text-2xl">Replies</h2>

          <div className="my-4">
            { comments.map((comment) => (
              <CommentList key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div> 
    </section>
  )
}