import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request){
  const session = await getServerSession(options);
  if (!session) redirect('/login')

  try {
    const body = await request.json()
    const { content, postId, parentId } = body
    if (!content || !postId ) return new Response(JSON.stringify({ message: 'Missing Data' }), { status: 400 })
    const comment = await prisma.comment.create({
      data: { content, postId, authorId: session.user?.email as string, parentCommentId: parentId}
    })
    return new Response(JSON.stringify({ message: 'Comment created' , comment}), { status: 201 })
  } catch(error) {
    console.log(error)
    return new Response(JSON.stringify({ message: 'Something went wrong', }), { status: 500 })
  }
}