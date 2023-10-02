import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { options } from "../auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const session = await getServerSession(options);
  if (!session) redirect('/login')
  try {
    const body = await request.json()
    if ( !body.authorId || !body.title || !body.content ) return new Response(JSON.stringify({ message: 'FIll in the fields' }), { status: 400 })
    
    await prisma.post.create({
      data: body
    })
    return new Response(JSON.stringify({ message: 'User Successfully created' }), { status: 201 })
  } catch(error) {
    console.log(error)
    return new Response(JSON.stringify({ message: 'Something went wrong' }), { status: 500 })
  }
}